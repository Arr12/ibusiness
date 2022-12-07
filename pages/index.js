import React, { useEffect, useState } from "react";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Home from "../src/components/Home";
import axios from "axios";

function Index(props) {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  function addProducts(title) {
    axios
        .fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: title,
            /* other product data */
        })
    }).then(res => res.json()).then(console.log);
  }
  function updateProducts(id, title) {
    axios
        .fetch('https://dummyjson.com/products/' + id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: title
        })
    }).then(res => res.json()).then(console.log);
  }
  function deleteProducts(id) {
    axios
        .fetch('https://dummyjson.com/products/' + id, {
        method: 'DELETE',
    }).then(res => res.json()).then(console.log);
  }
  function handleSearch(e) {
    let value = e.target.value;
    axios
      .get("https://dummyjson.com/products/search?q=" + value)
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div>
      <Header handleSearch = {() => handleSearch} />
      <Home products={products} axios />
      <Footer />
    </div>
  );
}

export default Index;
