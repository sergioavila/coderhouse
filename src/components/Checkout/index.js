import { useCart } from '../../context/CartContext'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { FaTrash } from 'react-icons/fa'
import Cards from '../../assets/img/cards.png'

const Checkout = () => {
    const { products, removeProduct } = useCart()
    return (
        <div className='container mt-4'>
            <h1>Checkout</h1>
                { products && products.length > 0 ? (
                    <div>

                    <Table striped className='mx-5 mt-4'>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Producto</th>
                            <th>Precio</th>
                            <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                        {products.map((product, index) => (
                            <tr key={product.slug}>
                                <td>{index+1}</td>
                                <td>{product.name}</td>
                                <td>${product.price}</td>
                                <td>
                                    <Button variant="danger" onClick={() => removeProduct(product)}>
                                        <FaTrash/>
                                    </Button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                    <div className='text-center mx-5 mt-4'>
                        <Button variant="primary" className='d-block mt-3 me-auto ms-auto btn btn-primary mb-5'>
                            Pagar
                        </Button>
                        <img src={Cards} alt="Cards" width="200px" />
                    </div>
                    </div>
                ) : (
                    <p className='text-center'>No hay productos en el carrito</p>
                )} 
        </div>
    )
}

export default Checkout