import "./styles.css";
import cartIcon from "../../assets/cart.svg";
import { Link } from "react-router-dom";
export default function HeaderClient() {
  return (
    <>
      <header className="gorillas-header-client">
        <nav className="gorillas-container">
          <Link to="/">
            <h1>GORILLAS</h1>
          </Link>

          <div className="gorillas-navbar-right">
            <div className="gorillas-menu-items-container">
              <div className="gorillas-menu-item">
                <Link to="/cart">
                  <img src={cartIcon} alt="Carrinho de compras" />
                </Link>
              </div>
            </div>
            <Link to="/login">Entrar</Link>
          </div>
        </nav>
      </header>
    </>
  );
}
