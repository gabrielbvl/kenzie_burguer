import "./styles.css";

function Product({ item, handleClick }) {
    return (
        <li className="Card">
            <div className="Product-Container-Img">
                <img className="Product-Img" src={item.img} alt="Img Product" />
            </div>
            <div className="Product-Description">
                <h2 className="Product-Description-H2">{item.name}</h2>
                <h4 className="Product-Description-H4">{item.category}</h4>
                <h3 className="Product-Description-H3">
                    {item.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                </h3>
                <button className="Product-Add" onClick={() => handleClick(item.id)}>
                    Adicionar
                </button>
            </div>
        </li>
    );
}

export default Product;
