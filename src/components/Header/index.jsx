import Logo from "./logo.svg"
import './styles.css'

function Header ( { showProducts } ) {

    

    return (
        <div className="Header">
            <img className="Logo" src={Logo} alt="Logo" />
            <div className="Search">
                <input
                className="Input-Header"
                type="text"
                placeholder="Digitar Pesquisa"
                onChange={(e) => {showProducts(e.target.value)}}
                />
                <button className="Btn-Header">Pesquisar</button>
            </div>
        </div>
    )

}

export default Header