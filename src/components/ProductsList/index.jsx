import './styles.css'
import Product from '../Product';

function ProductsList ( { products, handleClick } ) {

    

    return (

        <>
            <ul className="Cards">
            {products.map((item) =>
            <Product
            key={item.id}
            item={item}
            handleClick={handleClick}
            />)
            }
            </ul>
            
        </>

    )

}

export default ProductsList