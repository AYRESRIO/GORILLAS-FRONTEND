import "./styles.css";
import { ProductDTO } from "../../models/product";
import { Link } from "react-router-dom";

type Props = {
  product: ProductDTO;
};
export default function CatalogCard({ product }: Props) {
  return (
    <Link to={`/product-details/${product.id}`}>
      <div className="gorillas-card">
        <div className="gorillas-catalog-card-top gorillas-line-bottom">
          <img src={product.imgUrl} alt={product.name} />
        </div>
        <div className="gorillas-catalog-card-bottom">
          <h3>R$ {product.price.toFixed(2)}</h3>
          <h4>{product.name}</h4>
        </div>
      </div>
    </Link>
  );
}
