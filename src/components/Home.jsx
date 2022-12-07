import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faEllipsis,
  faShareNodes,
  faStar,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function Home(props) {
  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState(null);
  const [productsFilter, setProductsFilter] = useState(null);
  const [filterData, setFilterData] = useState(null);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("https://dummyjson.com/products/categories")
      .then((response) => {
        setCategories(response.data);
        setFilterData(response.data[0]);
        axios
          .get("https://dummyjson.com/products/category/" + response.data[0])
          .then((response) => {
            setProductsFilter(response.data.products);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //   console.log(productsFilter);
  function handleFilter(e) {
    let value = e.target.value;
    value !== "Listing" ? setFilterData(value) : setFilterData(filterData);
    axios
      .get("https://dummyjson.com/products/category/" + value)
      .then((response) => {
        setProductsFilter(response.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const settings = {
    autoplay: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const settings_listing = {
    autoplay: false,
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="bg-white flex flex-col items-center">
        <h1 className="w-9/12 text-4xl border-b-[10px] border-red-500 text-gray-800 pt-48 font-bold text-center lg:text-6xl lg:w-1/3 pb-4 tracking-[-2px]">
          REAL BUSINESS <br />
          REAL PEOPLE <sub>™</sub>
        </h1>
        <p className="text-2xl my-5">Start your Business here</p>
        <a
          className="mt-5 px-6 py-4 bg-red-500 text-white rounded-md"
          href="https://ibisnis.com/register"
        >
          Sign Up
        </a>
      </div>

      <div className="mt-48 px-3 lg:px-24 mb-3">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-2xl">Listing</h2>
          <a
            href="https://ibisnis.com/business"
            className="px-3 py-2 border-2 border-gray-300 rounded-md"
          >
            More
          </a>
        </div>
      </div>
      <hr />
      <div className="w-full px-7 mt-5 lg:px-24">
        <Slider className="mt-10 w-full mx-auto" {...settings}>
          {products?.map((v, i) => {
            return (
              <div>
                <div className="flex flex-col shadow-md rounded-lg overflow-hidden mx-4">
                  <img
                    src={v.thumbnail}
                    width="500"
                    height="250"
                    alt=""
                    className="w-full h-64"
                  />
                  <p className="text-gray-500 p-3">
                    {v.description.length > 50
                      ? v.description.substring(0, 50) + "..."
                      : v.description}
                  </p>
                  <div className="flex flex-row justify-between border-b-2 border-gray-300 w-full items-center p-3">
                    <div className="flex flex-row">
                      <div className="rounded-full w-14 h-14 overflow-hidden">
                        <img
                          width="80"
                          height="80"
                          src={v.thumbnail}
                          className=""
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col ml-3">
                        <h3 className="font-bold">
                          {v.brand.length > 15
                            ? v.brand.substring(0, 15) + "..."
                            : v.brand}
                        </h3>
                        <small className="text-gray-500 capitalize">
                          {v.category}
                        </small>
                      </div>
                    </div>
                    <div className="flex flex-row">
                      <div className="mx-2">
                        <FontAwesomeIcon icon={faHeart} />
                      </div>
                      <div className="mx-2">
                        <FontAwesomeIcon icon={faShareNodes} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>

      <div className="mt-48 px-3 lg:px-24 mb-3">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-2xl">Hotel</h2>
          <a
            href="https://ibisnis.com/business"
            className="px-3 py-2 border-2 border-gray-300 rounded-md"
          >
            More
          </a>
        </div>
      </div>
      <hr />
      <div className="w-full px-7 mt-5 lg:px-24">
        <Slider className="mt-10 w-full mx-auto" {...settings}>
          {products?.map((v, i) => {
            return (
              <div>
                <div className="flex flex-col shadow-md rounded-lg overflow-hidden mx-4">
                  <div className="flex flex-row justify-between w-full items-center p-3">
                    <div className="flex flex-row">
                      <div className="rounded-full w-14 h-14 overflow-hidden">
                        <img
                          width="60"
                          height="60"
                          src={v.thumbnail}
                          className=""
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col ml-3">
                        <h3 className="font-bold">
                          {v.brand.length > 15
                            ? v.brand.substring(0, 15) + "..."
                            : v.brand}
                        </h3>
                        <small className="text-gray-500">{v.category}</small>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <FontAwesomeIcon icon={faEllipsis} />
                    </div>
                  </div>
                  <img
                    src={v.thumbnail}
                    width="500"
                    height="250"
                    alt=""
                    className="w-full h-64"
                  />
                  <div className="flex flex-col ml-3 py-3">
                    <h3 className="font-bold">
                      {v.title > 15
                        ? v.title.substring(0, 15) + "..."
                        : v.title}
                    </h3>
                    <small className="text-gray-500">$ {v.price}</small>
                  </div>
                  <div className="flex flex-row ml-3 py-2">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-500"
                    />
                    <small className="ml-2">{v.rating}</small>
                  </div>
                  <p className="text-gray-500 p-3">
                    {v.description.length > 50
                      ? v.description.substring(0, 50) + "..."
                      : v.description}
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>

      <div className="mt-48 px-3 lg:px-24 mb-3">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-2xl">Restaurant</h2>
          <a
            href="https://ibisnis.com/business"
            className="px-3 py-2 border-2 border-gray-300 rounded-md"
          >
            More
          </a>
        </div>
      </div>
      <hr />
      <div className="w-full px-7 mt-5 lg:px-24">
        <Slider className="mt-10 w-full mx-auto" {...settings}>
          {products?.map((v, i) => {
            return (
              <div>
                <div className="flex flex-col shadow-md rounded-lg overflow-hidden mx-4">
                  <div className="bg-red-300 shadow-inner">
                    <img
                      src={v.thumbnail}
                      width="500"
                      height="250"
                      alt=""
                      className="w-full h-64 rounded-br-full shadow-lg"
                    />
                  </div>
                  <div className="flex flex-row justify-between w-full items-center p-3">
                    <div className="flex flex-row">
                      <div className="rounded-full w-14 h-14 overflow-hidden">
                        <img
                          width="60"
                          height="60"
                          src={v.thumbnail}
                          className=""
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col ml-3">
                        <h3 className="font-bold">
                          {v.brand.length > 15
                            ? v.brand.substring(0, 15) + "..."
                            : v.brand}
                        </h3>
                        <small className="text-gray-500">{v.category}</small>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <FontAwesomeIcon icon={faEllipsis} />
                    </div>
                  </div>
                  <div className="flex flex-col ml-3 py-3">
                    <h3 className="font-bold">
                      {v.title > 15
                        ? v.title.substring(0, 15) + "..."
                        : v.title}
                    </h3>
                    <small className="text-gray-500">$ {v.price}</small>
                  </div>
                  <div className="flex flex-row ml-3 py-2">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-500"
                    />
                    <small className="ml-2">{v.rating}</small>
                  </div>
                  <p className="text-gray-500 p-3">
                    {v.description.length > 50
                      ? v.description.substring(0, 50) + "..."
                      : v.description}
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>

      <div className="mt-48 px-3 lg:px-24 mb-3">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-2xl">Destination</h2>
          <a
            href="https://ibisnis.com/business"
            className="px-3 py-2 border-2 border-gray-300 rounded-md"
          >
            More
          </a>
        </div>
      </div>
      <hr />
      <div className="w-full px-7 mt-5 lg:px-24">
        <Slider className="mt-10 w-full mx-auto" {...settings}>
          {products?.map((v, i) => {
            return (
              <div>
                <div className="flex flex-col shadow-md rounded-lg overflow-hidden mx-4">
                  <div className="bg-red-300 shadow-inner relative">
                    <div className="absolute top-0 bg-gray-700 opacity-60 w-full h-full"></div>
                    <img
                      src={v.thumbnail}
                      width="500"
                      height="250"
                      alt=""
                      className="w-full h-64 shadow-lg"
                    />
                  </div>
                  <div className="flex flex-row justify-between w-full items-center p-3 absolute top-0">
                    <div className="flex flex-col ml-3 py-3">
                      <h3 className="font-bold text-white">
                        {v.title > 15
                          ? v.title.substring(0, 15) + "..."
                          : v.title}
                      </h3>
                      <small className="text-white">$ {v.price}</small>
                    </div>
                    <div className="flex flex-col">
                      <FontAwesomeIcon icon={faEllipsis} />
                    </div>
                  </div>
                  <div className="flex flex-row ml-3 py-2 mt-3">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-500"
                    />
                    <small className="ml-2">{v.rating}</small>
                  </div>
                  <p className="text-gray-500 p-3">
                    {v.description.length > 50
                      ? v.description.substring(0, 50) + "..."
                      : v.description}
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>

      <div className="mt-48 px-3 lg:px-24 mb-3">
        <div className="flex flex-col justify-between items-center">
          <h2 className="font-bold text-2xl mb-4">New Listing</h2>
          <div className="flex flex-col border-b-2 w-full justify-center">
            <Slider className="mt-10 w-full mx-auto" {...settings_listing}>
              {categories &&
                categories.map((v, i) => {
                  let name = v.split("-");
                  return (
                    <button
                      value={v}
                      className={`capitalize px-3 py-2 ${
                        filterData === v ? `border-b-4 border-gray-600` : ""
                      }`}
                      onClick={handleFilter}
                    >
                      {name.join(" ")}
                    </button>
                  );
                })}
            </Slider>
            <Slider className="mt-10 w-full mx-auto" {...settings}>
              {productsFilter?.map((v, i) => {
                return (
                  <div>
                    <div className="flex flex-col shadow-md rounded-lg overflow-hidden mx-4">
                      <img
                        src={v.thumbnail}
                        width="500"
                        height="250"
                        alt=""
                        className="w-full h-64"
                      />
                      <p className="text-gray-500 p-3">
                        {v.description.length > 50
                          ? v.description.substring(0, 50) + "..."
                          : v.description}
                      </p>
                      <div className="flex flex-row justify-between border-b-2 border-gray-300 w-full items-center p-3">
                        <div className="flex flex-row">
                          <div className="rounded-full w-14 h-14 overflow-hidden">
                            <img
                              width="80"
                              height="80"
                              src={v.thumbnail}
                              className=""
                              alt=""
                            />
                          </div>
                          <div className="flex flex-col ml-3">
                            <h3 className="font-bold">
                              {v.brand.length > 15
                                ? v.brand.substring(0, 15) + "..."
                                : v.brand}
                            </h3>
                            <small className="text-gray-500 capitalize">
                              {v.category}
                            </small>
                          </div>
                        </div>
                        <div className="flex flex-row">
                          <div className="mx-2">
                            <FontAwesomeIcon icon={faHeart} />
                          </div>
                          <div className="mx-2">
                            <FontAwesomeIcon icon={faShareNodes} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>

      <div className="mt-48 px-3 lg:px-24 mb-3">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-2xl">Important Number</h2>
          <a
            href="https://ibisnis.com/business"
            className="px-3 py-2 border-2 border-gray-300 rounded-md"
          >
            More
          </a>
        </div>
      </div>
      <hr />
      <div className="w-full px-7 mt-5 lg:px-24">
        <Slider className="mt-10 w-full mx-auto" {...settings}>
          {products?.map((v, i) => {
            return (
              <div>
                <div className="flex flex-col shadow-md rounded-lg overflow-hidden mx-4">
                  <img
                    src={v.thumbnail}
                    width="500"
                    height="250"
                    alt=""
                    className="w-full h-64"
                  />
                  <p className="text-gray-500 p-3">
                    {v.description.length > 50
                      ? v.description.substring(0, 50) + "..."
                      : v.description}
                  </p>
                  <div className="flex flex-row justify-between border-b-2 border-gray-300 w-full items-center p-3">
                    <div className="flex flex-row">
                      <div className="rounded-full w-14 h-14 overflow-hidden">
                        <img
                          width="80"
                          height="80"
                          src={v.thumbnail}
                          className=""
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col ml-3">
                        <h3 className="font-bold">
                          {v.brand.length > 15
                            ? v.brand.substring(0, 15) + "..."
                            : v.brand}
                        </h3>
                        <small className="text-gray-500 capitalize">
                          {v.category}
                        </small>
                      </div>
                    </div>
                    <div className="flex flex-row">
                      <div className="mx-2">
                        <FontAwesomeIcon icon={faHeart} />
                      </div>
                      <div className="mx-2">
                        <FontAwesomeIcon icon={faShareNodes} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>

      <div className="mt-48 px-3 lg:px-24 mb-3">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-2xl">Education</h2>
          <a
            href="https://ibisnis.com/education"
            className="px-3 py-2 border-2 border-gray-300 rounded-md"
          >
            More
          </a>
        </div>
      </div>
      <hr />
      <div className="w-full px-7 mt-5 lg:px-24">
        <Slider className="mt-10 w-full mx-auto" {...settings}>
          {products?.map((v, i) => {
            return (
              <div>
                <div className="flex flex-col shadow-md rounded-lg overflow-hidden mx-4">
                  <img
                    src={v.thumbnail}
                    width="500"
                    height="250"
                    alt=""
                    className="w-full h-64"
                  />
                  <p className="text-gray-500 p-3">
                    {v.description.length > 50
                      ? v.description.substring(0, 50) + "..."
                      : v.description}
                  </p>
                  <div className="flex flex-row justify-between border-b-2 border-gray-300 w-full items-center p-3">
                    <div className="flex flex-row">
                      <div className="rounded-full w-14 h-14 overflow-hidden">
                        <img
                          width="80"
                          height="80"
                          src={v.thumbnail}
                          className=""
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col ml-3">
                        <h3 className="font-bold">
                          {v.brand.length > 15
                            ? v.brand.substring(0, 15) + "..."
                            : v.brand}
                        </h3>
                        <small className="text-gray-500 capitalize">
                          {v.category}
                        </small>
                      </div>
                    </div>
                    <div className="flex flex-row">
                      <div className="mx-2">
                        <FontAwesomeIcon icon={faHeart} />
                      </div>
                      <div className="mx-2">
                        <FontAwesomeIcon icon={faShareNodes} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}
export default Home;
