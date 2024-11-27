import "./styles.css";
import coxinhaImg from "../../assets/coxinha.jpg";
export default function CatalogCard() {
  return (
    <>
      <div className="gorillas-card">
        <div className="gorillas-catalog-card-top gorillas-line-bottom">
          <img src={coxinhaImg} alt="coxinha" />
        </div>
        <div className="gorillas-catalog-card-bottom">
          <h3>R$ 70,00</h3>
          <h4>Cem coxinhas de galinha</h4>
        </div>
      </div>
    </>
  );
}
