
import { ProductDTO } from "../../models/product";
import ProductCategory from "../ProductCategory";
import "./styles.css";

type Props= {
  product: ProductDTO;
}
export default function ProductDetailsCard({product}:Props) {
  return (
    <div className="gorillas-card gorillas-mb20 gorillas-mt20">
      <div className="gorillas-product-details-top  gorillas-line-bottom ">
        <img src={product.imgUrl} alt="product.name" />
      </div>
      <div className="gorillas-product-details-bottom">
        <h3>R$ {product.price.toFixed(2)}</h3>
        <h4>{product.name}</h4>
        <p>
          {product.description}
        </p>
        <div className="gorillas-category-container">
          {
            product.categories.map(item => (
              <ProductCategory key={item.id} name= {item.name} />
            ))
          }
        </div>
      </div>
    </div>
  );
}
