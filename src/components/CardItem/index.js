import {Link} from 'react-router-dom'


const CardItem = ({ item }) => {
    const { name, id, image, price, category } = item;
    return (
        <div className="card mb-4">
            <img src={`/products/${image}`} className="card-img-top" alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Categoría: {category}</p>
                <p className="card-text">Precio: ${price}</p>
                <Link to={`/item/${id}`} className="btn btn-primary w-100">ver más</Link>
            </div>
        </div>
    );
}

export default CardItem;