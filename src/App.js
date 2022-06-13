import { Route, Routes } from "react-router-dom";
import Home from "./pages/Homepage";
import Products from "./pages/Cart";
import Layout from "./Component/Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/gio-hang" element={<Products />} />
      </Route>
    </Routes>
  );
}

export default App;
