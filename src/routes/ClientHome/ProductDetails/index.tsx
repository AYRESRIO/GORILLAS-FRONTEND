import "./styles.css";
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import * as productService from "../../../services/product-service";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ProductDetails() {
  const params = useParams();

  const product = productService.findById(Number(params.productId));
  return (
    <main>
      <section id="product-details-section">
        <div className="gorillas-container">
          {product && <ProductDetailsCard product={product} />}

          <div className="gorillas-btn-page-container gorillas-mb20">
            <ButtonPrimary text="Comprar" />
            <Link to = "/">
              <ButtonInverse text="Início" />
            </Link>
            
          </div>
        </div>
      </section>
    </main>
  );
}
