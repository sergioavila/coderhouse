import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import data from '../../data.json'

const ItemDetailContainer = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const getProductDetails = () => {
        return new Promise((res) => {
            setTimeout(() => {
                res(data)
            }, 3000)
        })
    }

    useEffect(() => {
        getProductDetails().then((res) => {
            const product = res.find((product) => product.id === id)
            setProduct(product)
            setLoading(false)
        })  
            
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
                                <img src={`/products/${product.image}`} alt={product.name} className="img-fluid w-100 border" />
                            </div>  
                            <div className="col-lg-7 col-xs-12">
                                <h1 className='my-5 text-start'>{product.name}</h1>
                                <p>{product.description}</p>
                                <p>{product.category}</p>
                                <p>Precio: ${product.price}</p> 
                                <Link to={`/item/${id}`} className="btn btn-primary w-75">Comprar</Link>
                            </div>
                        </div>
                    </div>


                )}
        </div>
    )
}

export default ItemDetailContainer