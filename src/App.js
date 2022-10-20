import React from "react";
import Navbar from "./components/interface/Navbar";
import Toggle from './components/interface/Toggle';
import useId from "./components/hooks/useId";
import HomePage from "./components/pages/HomePage";
import ShopPage from "./components/pages/ShopPage";
import CartPage from "./components/pages/CartPage";
import WishlistPage from './components/pages/WishlistPage';
import InformationPage from "./components/pages/InformationPage";
import { useSelector } from "react-redux";
import './App.css';
function App() {
  const {darkMode} = useId();
  const visiblePage = useSelector(state => state.page.visiblePage)
  
  let show;
  if(visiblePage === 'Home'){
    show = <HomePage/>
  }
  if(visiblePage === 'Shop'){
    show = <ShopPage/>
  }
  if(visiblePage === 'Cart'){
    show = <CartPage/>
  }
  if(visiblePage === 'WishList'){
    show = <WishlistPage/>
  }
  if(visiblePage === 'AboutUs'){
    show =<InformationPage/>
  }
  return (
    <div className="App">
      <Navbar/>
      <div className = 'main-page' id = {`${darkMode && 'dark'}`}>
          <Toggle/>
          {show}
        </div>
    </div>
  );
}

export default App;
