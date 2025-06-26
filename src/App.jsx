import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Carousal from './components/Carousal';
import Signin from './components/Signin';
import Signup from "./components/Signup";
import Mens from "./components/Mens";
import Women from "./components/Women";
import ScrolltoTop from './components/ScrolltoTop';
import Cart from "./components/Cart";
import More from "./components/More";
import Sneakers from "./components/Sneakers";
import { CartProvider } from "./components/CartContext";
import Footer from "./components/Footer";
import CardPayment from "./components/CardPayment";
import UPIPayment from "./components/UPIPayment";
import OrderSuccess from "./components/OrderSucess";
import CODPayment from "./components/CODPayment";
import { SearchProvider } from "./components/SearchContext";
import SearchResults from "./components/SearchResults";

function App() {
  return (
    <CartProvider>
      <SearchProvider>
         <ScrolltoTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Carousal />} />
          <Route path="search" element={<SearchResults />} />
          <Route path="signin" element={<Signin />} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/Mens" element={<Mens/>}/>
          <Route path="/Women" element={<Women/>}/>
          <Route path="/Sneakers" element={<Sneakers/>}/>
          <Route path="/cart" element={<Cart />} />
          <Route path="/More" element={<More/>} />
          <Route path="/payment/upi" element={<UPIPayment />} />
          <Route path="/payment/card" element={<CardPayment />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/payment/cod" element={<CODPayment/>}/>
          
        </Route>
      </Routes>
      <Footer/>
      </SearchProvider>
    </CartProvider>
  );
}

export default App;
