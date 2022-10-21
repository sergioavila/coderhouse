import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import { useCart } from '../../context/CartContext'


const ItemListContainer = ({greeting}) => {
    const { products, removeProduct, clearCart } = useCart()
    return (
        <>
            <h4>{greeting}</h4>
            {products && products.length > 0 ? (
            <ListGroup>
            {products.map((product) => (
                <ListGroup.Item key={product.id}>
                    <div className="d-flex justify-content-between">
                        <div>
                            <h5>{product.title}</h5>
                            <p>{product.description}</p>
                        </div>
                        <div>
                            <Button variant="danger" onClick={() => removeProduct(product)}>Eliminar</Button>
                        </div>
                    </div>
                </ListGroup.Item>
            ))}
            <Button variant="primary" className=' d-block mt-3 me-auto ms-auto'>
                Realizar el pago
            </Button>
            </ListGroup>) : (
                <><p>No hay productos en el carrito</p>
                <Button variant="primary" className=' d-block mt-3 me-auto ms-auto' disabled>
                    Realizar el pago
                </Button></>
            )}
            
        </>
        
    )
}

export default ItemListContainer