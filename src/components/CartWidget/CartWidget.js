import React, { useState } from 'react'

import { FaShoppingCart } from 'react-icons/fa'
import Button from 'react-bootstrap/Button'
import ToastContainer from 'react-bootstrap/ToastContainer'
import Toast from 'react-bootstrap/Toast'

import ItemListContainer from './ItemListContainer'

const CartWidget = () => {
    const [show, toggleShow] = useState(false)

    return (
        <>
            <Button variant="flat" size="xxl" onClick={() => toggleShow(true)}>
                <FaShoppingCart />
            </Button>
            <ToastContainer position="top-end" className="p-3">
                <Toast show={show} onClose={() => toggleShow(false)}>
                    <Toast.Header>
                        <FaShoppingCart />
                        <strong className="me-auto ps-2">Carrito de compras</strong>
                        <small>11 mins ago</small>
                    </Toast.Header>
                    <Toast.Body>
                        <ItemListContainer greeting="Bienvenido."/>
                    </Toast.Body>
                </Toast>
            </ToastContainer>
        </>
    )
}

export default CartWidget