import "./styles.css";
import HeaderClient from "../../components/HeaderClient";
import SearchBar from "../../components/SearchBar";
import CatalogCard from "../../components/CatalogCard";
import ButtonNextPage from "../../components/ButtonNextPage";
export default function Catalog() {
  return (
    <>
      <HeaderClient />
      <main>
        <section id="catalog-section" className="gorillas-container">
          <SearchBar />

          <div className="gorillas-catalog-cards gorillas-mt20 gorillas-mb20">
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
          </div>
          <ButtonNextPage />
        </section>
      </main>
    </>
  );
}
