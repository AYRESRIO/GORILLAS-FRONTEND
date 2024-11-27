import './styles.css';
import cartIcon from "../../assets/cart.svg";
export default function HeaderClient() {
  return (
    <>
      <header className="gorillas-header-client">
        <nav className="gorillas-container">
          <h1>GORILLAS</h1>
          <div className="gorillas-navbar-right">
            <div className="gorillas-menu-items-container">
              <div className="gorillas-menu-item">
                <img src={cartIcon} alt="Carrinho de compras" />
              </div>
            </div>
            <a href="#">Entrar</a>
          </div>
        </nav>
      </header>
    </>
  );
}
