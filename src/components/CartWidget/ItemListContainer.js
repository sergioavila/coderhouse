import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

const ItemListContainer = ({greeting}) => {
    return (
        <>
            <h4>{greeting}</h4>
            <ListGroup>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
            <Button variant="primary" className=' d-block mt-3 me-auto ms-auto'>
                Realizar el pago
            </Button>
        </>
        
    )
}

export default ItemListContainer