import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import BgBreadcrumb from "../assets/images/background-breadcrumb.png";
import IbisnisLap from "../assets/images/ibisnis_lap.png";
import SeoOptimization from "../assets/images/icon-seo.png";
import Support from "../assets/images/icon-support-cs.png";
import GAdwords from "../assets/images/icon-addw.png";
import Statistik from "../assets/images/icon-vip-15.png";
import Curve from "../assets/images/curve-2.png";
import Website from "../assets/images/website3.jpg";
import PricePlan from "./PricePlan";
import Register from "./Register";
import Image from "next/image";
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
      <Image
        src={BgBreadcrumb}
        width="1155"
        height="721"
        alt=""
        className="absolute right-0"
      />
      <div
        className={`bg-white flex flex-col md:flex-row px-10 lg:px-48 pb-48 pt-64`}
        id="beranda"
      >
        <div className="animate-opacity-top md:w-1/2">
          <h1 className="text-4xl text-gray-800 font-bold lg:text-6xl pb-4">
            REAL BUSINESS <br />
            <span className="text-purple-500">
              REAL PEOPLE <sub>™</sub>
            </span>
          </h1>
          <div className="text-2xl mt-5 mb-14">
            <p className="text-gray-400">Start your Business here</p>
          </div>
          <a
            className="px-6 py-4 bg-purple-500 text-white rounded-full"
            href="https://ibisnis.com/register"
          >
            Sign Up
          </a>
        </div>
        <div className="md:w-1/2 relative">
          <Image
            src={IbisnisLap}
            width="1516"
            height="893"
            alt=""
            className="animate-opacity-left-right absolute top-20 md:top-0 lg:top-20 lg:left-10 w-96 mx-auto"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row px-10 my-56 md:px-48 relative">
        <Image
          src={Curve}
          width="414"
          height="825"
          alt=""
          className="absolute right-0 scale-x-[-1] top-[-150px]"
        />
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-5">
            iBisnis.com menawarkan solusi website dengan design dan template
            profesional.
          </h2>
          <p>
            iBisnis memberikan pilihan design modern dan tampil elegan untuk
            setiap website yang dihasilkan sehingga tetep menarik. Website 100%
            mobile friendly sehingga website Anda akan mudah diakses melalui
            perangkat apapun, kapanpun, dan dimanapun
          </p>
        </div>
        <div className="w-full mt-10 md:w-1/2 md:mt-0">
          <Image src={Website} alt="" width="1023" height="682" className="rounded-tl-[200px] rounded-tr-[80px] rounded-br-[362px] rounded-[200px]" />
        </div>
      </div>

      <div className="mt-48 px-10 lg:px-24 mb-3">
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
                      className={`capitalize px-10 py-2 ${
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
        </div>
      </div>

      <div className="my-48 px-10 lg:px-24" id="keuntungan">
        <Image
          src={Curve}
          width="414"
          height="825"
          alt=""
          className="absolute left-0"
        />
        <div className="flex flex-col justify-between items-center">
          <h2 className="font-bold text-2xl mb-4">
            Keuntungan Bergabung dengan IBisnis
          </h2>
          <p>Segera kembangkan bisnis Anda dengan bergabung di iBisnis</p>
        </div>
        <div className="flex flex-col lg:flex-row mt-16">
          <div className="flex w-full flex-col lg:w-1/4 md:flex-row lg:flex-col lg:items-center px-5">
            <Image
              src={SeoOptimization}
              width="500"
              height="449"
              alt=""
              className="md:w-2/6 lg:w-9/12 bg-purple-100 my-10 rounded-tl-[80px] rounded-tr-[200px] rounded-br-[200px] rounded-[362px]"
            />
            <div className="flex flex-col justify-center ml-5">
              <h3 className="font-bold text-xl my-3">
                Search Engine Optimization
              </h3>
              <p>
                Meningkatkan peringkat bisnis Anda pada halaman utama Google dan
                ditemukan calon customer
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col lg:w-1/4 md:flex-row lg:flex-col lg:items-center px-5">
            <Image
              src={Support}
              width="500"
              height="449"
              alt=""
              className="md:w-2/6 lg:w-9/12 bg-purple-100 my-10 rounded-tl-[80px] rounded-tr-[200px] rounded-br-[200px] rounded-[362px]"
            />
            <div className="flex flex-col justify-center ml-5">
              <h3 className="font-bold text-xl my-3">Dukungan Pelanggan</h3>
              <p>
                Kami siap membantu melalui email, media sosial dan call center
                (+62315660008)
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col lg:w-1/4 md:flex-row lg:flex-col lg:items-center px-5">
            <Image
              src={GAdwords}
              width="500"
              height="449"
              alt=""
              className="md:w-2/6 lg:w-9/12 bg-purple-100 my-10 rounded-tl-[80px] rounded-tr-[200px] rounded-br-[200px] rounded-[362px]"
            />
            <div className="flex flex-col justify-center ml-5">
              <h3 className="font-bold text-xl my-3">Google Adwords</h3>
              <p>
                Memudahkan pencari menemukan sumber informasi sesuai dengan kata
                kunci
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col lg:w-1/4 md:flex-row lg:flex-col lg:items-center px-5">
            <Image
              src={Statistik}
              width="500"
              height="449"
              alt=""
              className="md:w-2/6 lg:w-9/12 bg-purple-100 my-10 rounded-tl-[80px] rounded-tr-[200px] rounded-br-[200px] rounded-[362px]"
            />
            <div className="flex flex-col justify-center ml-5">
              <h3 className="font-bold text-xl my-3">Statistik Pengunjung</h3>
              <p>Layanan dari iBisnis yang menampilkan statistik pengunjung.</p>
            </div>
          </div>
        </div>
      </div>

      <PricePlan />
      <Register />

      <div className="mt-16 py-32" id="kontak">
        <div className="px-5 lg:px-24">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="font-bold text-xl">
                Tertarik bergabung dengan kami ?
              </h2>
              <p className="text-gray-500 py-2">
                Beri kami panggilan sekarang!
              </p>
            </div>
            <div className="flex flex-wrap items-center pl-5">
              <p>Call us now : &nbsp;</p>
              <a
                href="https://wa.me/628113119903?text=Hello%20iBisnis"
                className="py-2 border-0 rounded-md font-bold text-purple-500"
              >
                (+62) 8113119903
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
