import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "./routes/ClientHome/ProductDetails";
import CLientHome from "./routes/ClientHome";
import Catalog from "./routes/ClientHome/Catalog";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CLientHome />}>
            <Route index element={<Catalog />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="product-details" element={<ProductDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
