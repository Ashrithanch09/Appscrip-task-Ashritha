import React from 'react';
import Header from './Header';
import ProductCard from './ProductCard';
import Footer from './Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <ProductCard image="images/products-icon.png" title="Products" price="$10" />
      
      <Footer />
    </div>
  );
};

export default App;
