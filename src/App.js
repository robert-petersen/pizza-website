import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import { GlobalStyle } from "./GlobalStyles";
import Hero from "./components/Hero";
import Products from "./components/Products";
import { productData, productData2 } from "./components/Products/data.js";
import Feature from "./components/Feature";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose Your Favorite" data={productData}/>
      <Feature />
      <Products heading="Sweet Treats for You" data={productData2}/>
      <Footer />
    </Router>
  );
}

export default App;
