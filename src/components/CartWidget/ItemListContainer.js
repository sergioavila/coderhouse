import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import { useCart } from '../../context/CartContext'
import { FaTrash } from 'react-icons/fa'
import {Link} from 'react-router-dom'

const ItemListContainer = ({greeting}) => {
    const { products, removeProduct } = useCart()
    return (
        <>
            {products && products.length > 0 ? (
            <ListGroup>
            {products.map((product) => (
                <ListGroup.Item key={product.id}>
                    <div className="d-flex justify-content-between">
                        <div className='d-flex align-items-center'>
                            <p className='m-0'>{product.name}</p>
                        </div>
                        <div>
                            <Button variant="danger" onClick={() => removeProduct(product)}>
                                <FaTrash/>
                            </Button>
                        </div>
                    </div>
                </ListGroup.Item>
            ))}
            <Link to="/carrito" variant="primary" className='d-block mt-3 me-auto ms-auto btn btn-primary'>
                Realizar el pago
            </Link>
            </ListGroup>) : (
                <><p>No hay productos en el carrito</p>
                <Button to="/carrito" variant="primary" className='d-block mt-3 me-auto ms-auto' disabled>
                    Realizar el pago
                </Button></>
            )}
            
        </>
        
    )
}

export default ItemListContainer