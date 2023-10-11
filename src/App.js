import React from 'react';
import './assets/App.css';
import {Menu} from "./Components/ToolBar";
import {ProductTable} from "./Components/ProductTable";
import {useState} from "react";
import {data_MacBook_product} from "./data/data_MacBook";

const FirstProduct = {
    name: data_MacBook_product.name,
    level: data_MacBook_product.level,
    category: data_MacBook_product.category,
    code_barre: data_MacBook_product.code_barre,
};

function App() {
    const [products, setProducts] = useState([FirstProduct]);
    const addProduct = (newProduct) => {
        setProducts([...products, newProduct]);
    };

  return (
      <div className="bg-darkblue min-h-screen">
          <Menu onAddProduct={addProduct}/>
          <ProductTable products={products}/>
      </div>

  );
}

export default App;
