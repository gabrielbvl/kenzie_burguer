import "./App.css";
import { useEffect, useState } from "react";
import Cart from "./components/Cart";
import ProductsList from "./components/ProductsList";
import Header from "./components/Header";

function App() {
    const [products, setProducts] = useState([]);
    const [newProducts, setNewProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentSale, setCurrentSale] = useState([]);

    useEffect(() => {
        fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
                setNewProducts(data);
            })
            .catch((err) => console.log(err));
    }, []);

    const handleClick = (id) => {
        const product = products.find((produto) => produto.id === Number(id));
        if (!currentSale.includes(product)) {
            setCurrentSale([...currentSale, product]);
        }
    };

    const removeProduct = (id) => {
        const productCart = currentSale.filter((element) => {
            return element.id !== id;
        });
        setCurrentSale([...productCart]);
    };

    const removeAllProducts = () => {
        setCurrentSale([]);
    };

    const showProducts = (name) => {
        let productFiltered = newProducts.filter(
            (produto) =>
                produto.name.toLowerCase().includes(name.toLowerCase()) ||
                produto.category.toLowerCase().includes(name.toLowerCase())
        );
        setProducts([...productFiltered]);
    };

    return (
        <div className="App">
            <header className="App-header">
                <Header filteredProducts={filteredProducts} showProducts={showProducts} />

                <div className="Test">
                    <ProductsList
                        handleClick={handleClick}
                        filteredProducts={filteredProducts}
                        products={products}
                    />

                    <Cart
                        className="Cart"
                        currentSale={currentSale}
                        removeProduct={removeProduct}
                        removeAllProducts={removeAllProducts}
                    />
                </div>
            </header>
        </div>
    );
}

export default App;
