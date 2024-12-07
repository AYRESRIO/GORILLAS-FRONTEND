import "./styles.css";
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import { ProductDTO } from "../../../models/product";

const product: ProductDTO = {
  id: 2,
  name: "Coxinhas de bacalhau",
  description: "100 Coxinhas de bacalhau fritas",
  imgUrl:
    "https://ogimg.infoglobo.com.br/in/23272850-543-867/FT1086A/Toque-de-Chef.jpg",
  price: 90.0,
  categories: [
    {
      id: 2,
      name: "Salgadinhos",
    },
    {
      id: 3,
      name: "Pizzas",
    },
    {
      id: 4,
      name: "Pastéis",
    },
    {
      id: 5,
      name: "Burgers",
    },
  ],
};

export default function ProductDetails() {
  return (
    <main>
      <section id="product-details-section">
        <div className="gorillas-container">
          <ProductDetailsCard product={product} />
          <div className="gorillas-btn-page-container gorillas-mb20">
            <ButtonPrimary text="Comprar" />
            <ButtonInverse text="Início" />
          </div>
        </div>
      </section>
    </main>
  );
}
