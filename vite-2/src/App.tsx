import ProductAdd from "./components/ProductAdd";
import ProductEdit from "./components/ProductEdit";
import ProductList from "./components/ProductList";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="admin/products/add" element={<ProductAdd />} />
        <Route path="admin/products/edit/:id" element={<ProductEdit />} />
      </Routes>
    </>
  );
}

export default App;
