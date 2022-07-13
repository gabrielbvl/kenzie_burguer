import "./styles.css";

function Cart({ currentSale, removeProduct, removeAllProducts }) {
    const totalPrice = currentSale.reduce((previousValue, item) => {
        return item.price + previousValue;
    }, 0);

    return (
        <div className="Cart">
            <div className="Title-Cart">
                <h2 className="Title-Cart-H2">Carrinho de compras</h2>
            </div>

            {currentSale.length === 0 ? (
                <ul className="Cart-Products-Empty">
                    <h2> Sua sacola está vazia </h2>
                    <h4>Adicione itens</h4>
                </ul>
            ) : (
                <>
                    <ul className="Cart-Products">
                        {currentSale.map((item) => (
                            <li className="Card-Cart">
                                <div className="Product-Cart-Container-Img">
                                    <img
                                        className="Product-Cart-Img"
                                        src={item.img}
                                        alt="Img Product"
                                    />
                                </div>
                                <div className="Product-Cart-Description">
                                    <h2 className="Product-Cart-Description-H2">{item.name}</h2>
                                    <h4 className="Product-Cart-Description-H4">{item.category}</h4>
                                </div>
                                <button
                                    className="Product-Remove"
                                    onClick={() => removeProduct(item.id)}
                                >
                                    Remover
                                </button>
                            </li>
                        ))}
                    </ul>
                    <hr />
                    <div className="Price-Total">
                        <p className="Cart-Products-TotalPrice">Total:</p>
                        <span>
                            {totalPrice.toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                            })}{" "}
                        </span>
                    </div>
                    <button className="Btn-Remove-All" onClick={() => removeAllProducts()}>
                        Remover Todos
                    </button>
                </>
            )}
        </div>
    );
}

export default Cart;
