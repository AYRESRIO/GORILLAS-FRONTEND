import "./styles.css";
import SearchBar from "../../../components/SearchBar";
import CatalogCard from "../../../components/CatalogCard";
import ButtonNextPage from "../../../components/ButtonNextPage";
import { ProductDTO } from "../../../models/product";

const product: ProductDTO = {
  id: 2,
  name: "Coxinhas",
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

export default function Catalog() {
  return (
    <main>
      <section id="catalog-section" className="gorillas-container">
        <SearchBar />

        <div className="gorillas-catalog-cards gorillas-mt20 gorillas-mb20">
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
        </div>
        <ButtonNextPage />
      </section>
    </main>
  );
}
