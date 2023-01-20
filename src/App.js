import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.css"
import Navbar from "./components/navbar";
import NotFound from "./pages/404";
import About from "./pages/about";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import Favorite from "./pages/favorite";
import Home from "./pages/home";
import Store from "./pages/store";
import Footer from "./components/footer";

function App() {
  return <div className={styles.container}>
    
    <BrowserRouter>
    
  <main className={styles.main}>
    {/* <Navbar /> */}
  
    
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/fav" element={<Favorite/>} />
        <Route path="/store" element={<Store/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      {/* <Footer/> */}
  </main>
  </BrowserRouter>
   

  </div>;
}

export default App;
