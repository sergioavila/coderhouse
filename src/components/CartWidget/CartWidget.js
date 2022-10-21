import React, { useEffect, useState } from 'react'

import { FaShoppingCart } from 'react-icons/fa'
import Button from 'react-bootstrap/Button'
import ToastContainer from 'react-bootstrap/ToastContainer'
import Toast from 'react-bootstrap/Toast'

import ItemListContainer from './ItemListContainer'
import { useCart } from '../../context/CartContext'

const CartWidget = () => {
    const [show, toggleShow] = useState(false)
    const { products } = useCart()

    useEffect(() => {
        if (products.length > 0) {
            toggleShow(true)
            setTimeout(() => {
                toggleShow(false)
            }, 1500)
        }
    }, [products])

    return (
        <>
            <Button variant="flat" size="xxl" onClick={() => toggleShow(true)}>
                <FaShoppingCart />
                {products.length > 0 && <span className="badge bg-danger fs-6">{products.length}</span>}
            </Button>
            <ToastContainer position="top-end" className="p-3">
                <Toast show={show} onClose={() => toggleShow(false)}>
                    <Toast.Header>
                        <FaShoppingCart />
                        <strong className="me-auto ps-2">Carrito de compras</strong>
                        <small>11 mins ago</small>
                    </Toast.Header>
                    <Toast.Body>
                        <ItemListContainer/>
                    </Toast.Body>
                </Toast>
            </ToastContainer>
        </>
    )
}

export default CartWidget