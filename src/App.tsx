
import './App.css';
import coxinhaImg from './assets/coxinha.jpg';
import cartImg from'./assets/cart.svg';
function App() {
  
  return (
    <>
    <header className="gorillas-header-client">
      <nav className="gorillas-container">
        <h1>GORILLAS</h1>
        <div className="gorillas-navbar-right">
          <div className="gorillas-menu-items-container">
            <div className="gorillas-menu-item">
              <img src={cartImg} alt="Carrinho de compras"/>
            </div>
          </div>
          <a href="#">Entrar</a>
        </div>
      </nav>
    </header>
    <main>
      <section id="product-details-section" >
        <div className="gorillas-container">
          <div className="gorillas-card gorillas-mb20 gorillas-mt20">
            <div className="gorillas-product-details-top  gorillas-line-bottom ">
                <img src={coxinhaImg} alt="salgado"/>
            </div>
            <div className="gorillas-product-details-bottom">
              <h3>R$ 60,00</h3>
              <h4>Cem coxinhas de galinha</h4>
              <p>
                Salgadinho com recheio de frango temperado com alho, cebola, tomate
                e cheiro verde
              </p>
              <div className="gorillas-category-container">
                <div className="gorillas-category">Salgadinhos</div>
                <div className="gorillas-category">Coxinhas</div>
              </div>
             </div> 
          </div>
        </div>
    
          
          <div className="gorillas-btn-page-container gorillas-mb20">
            <div className="gorillas-btn gorillas-btn-blue">
              Comprar
            </div>
            <div className="gorillas-btn gorillas-btn-white">
              Início
            </div>
          </div>
      </section>
    </main>
    </>
  );
}

export default App
