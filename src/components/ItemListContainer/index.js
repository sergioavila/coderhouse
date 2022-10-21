import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'

import {collection, getDocs, getFirestore } from 'firebase/firestore'
import './style.css'

import CardItem from '../CardItem'

const Home = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { category } = useParams()

    const getProducts = () => {

        const db = getFirestore()
        const productsCollection = collection(db, 'products')

        getDocs( productsCollection ).then( res => {
            const data = res.docs.map( doc => doc.data() )
            if(category){
                setProducts(data.filter( product => product.category === category))
            }else{
                setProducts(data)
            }
            setLoading(false)
        })
    }

    useEffect(() => {
        setLoading(true)
        getProducts()
    }, [category])


    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className='my-5'>Productos</h1>
                </div>
                {loading ? (
                    <div className="col-12 text-center">
                        <p>Cargando información...</p>
                    </div>
                ) : (
                    products.length > 0 ? (
                        products.map((product) => (
                        <div className="col-lg-4 col-xs-12" key={product.slug}>
                            <CardItem item={product} />
                        </div>  
                    ))
                ) : (
                    <div className="col-12 text-center">
                        <p>No hay productos en la categoría.</p>
                    </div>
                    )
                )}
            </div>
        </div>
    )
}

export default Home;