import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'

import data from '../../data.json'
import './style.css'

import CardItem from '../CardItem'

const Home = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { category } = useParams()

    const getProducts = () => {
        return new Promise((res) => {
            setTimeout(() => {
                if (category) {
                    res(data.filter((product) => product.category === category))
                    setLoading(false)
                } else {
                    res(data)
                    setLoading(false)
                }
            }, 2000)
        })
    }

    useEffect(() => {
        setLoading(true)
        getProducts()
            .then((res) => {
                setProducts(res)
            })
            .catch((err) => {
                console.log(err)
            })
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
                    products.map((product) => (
                        <div className="col-lg-4 col-xs-12" key={product.id}>
                            <CardItem item={product} />
                        </div>  
                    ))
                )}
            </div>
        </div>
    )
}

export default Home;