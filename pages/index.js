import React, { useEffect, useState } from "react";
import Preloader from "../src/components/Preloader";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Home from "../src/components/Home";
import ModalSearch from "../src/components/ModalSearch";
import axios from "axios";

function Index(props) {
  const [products, setProducts] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [offset, setOffset] = useState(0);

  function scrollToDiv(id){
    const divElement = document.getElementById(id);
    divElement.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  function addProducts(title) {
    axios
      .fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title,
          /* other product data */
        }),
      })
      .then((res) => res.json())
      .then(console.log);
  }
  function updateProducts(id, title) {
    axios
      .fetch("https://dummyjson.com/products/" + id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title,
        }),
      })
      .then((res) => res.json())
      .then(console.log);
  }
  function deleteProducts(id) {
    axios
      .fetch("https://dummyjson.com/products/" + id, {
        method: "DELETE",
      })
      .then((res) => res.json())
      .then(console.log);
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
    <>
      <Preloader />
      <Header
        handleSearch={handleSearch}
        showModal={showModal}
        setShowModal={setShowModal}
        offset={offset}
        scrollToDiv={scrollToDiv}
      />
      <Home products={products} />
      <Footer scrollToDiv={scrollToDiv} />
      <ModalSearch showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}

export default Index;
