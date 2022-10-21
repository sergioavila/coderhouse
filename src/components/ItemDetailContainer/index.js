import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {collection, getDocs, getFirestore } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const getProductDetails = () => {
        const db = getFirestore()
        const productsCollection = collection(db, 'products')

        getDocs( productsCollection ).then( res => {
            const data = res.docs.map( doc => doc.data() )
            const product = data.find( product => product.slug === id )
            setProduct(product)
            setLoading(false)
        })
    }

    useEffect(() => {
        getProductDetails()
    }, [])


    return (
        <div>
        {loading ? (
                    <div className="col-12 text-center">
                        <p>Cargando información...</p>
                    </div>
                ) : (
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-lg-5 col-xs-12">    
                                <img src={product.img} alt={product.name} className="img-fluid w-100 border p-4" />
                            </div>  
                            <div className="col-lg-7 col-xs-12">
                                <h1 className='my-5 text-start'>{product.name}</h1>
                                <p>{product.description}</p>
                                <p>Categoría: {product.category}</p>
                                <p>Precio: ${product.price}</p> 
                                <Link to={`/item/${id}`} className="btn btn-primary w-75">Agregar al carrito</Link>
                            </div>
                        </div>
                    </div>


                )}
        </div>
    )
}

export default ItemDetailContainer