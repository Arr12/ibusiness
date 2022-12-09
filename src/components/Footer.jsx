import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo_download from "../assets/images/download-ibisnis.png";
import logo_ibisnis from "../assets/images/logo-ibisnis.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHeart,
  faUserCircle,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

function Footer(props) {
  return (
    <div>
      <div className="flex flex-col justify-center bg-gray-100 py-24 mt-7 px-8 lg:px-24 lg:flex-row">
        <div className="my-7 pr-10 lg:w-1/4">
          <Image
            className="mb-5"
            width="150"
            height="150"
            src={logo_ibisnis}
            alt=""
          />
          <h2 className="text-2xl font-bold mb-3">About iBisnis</h2>
          <p className="text-md">
            <b>iBisnis.com</b> hadir menjadi solusi terbaik dan terpercaya bagi
            bisnis Anda. Menawarkan beragam produk dan jasa sekaligus menjadi
            portal bisnis UKM di Indonesia.
          </p>
        </div>
        <div className="my-7 lg:w-[18%] flex flex-col">
          <h2 className="text-2xl font-bold mb-3">Information</h2>
          <a href="#" className="text-gray-700 font-bold text-md my-1">
            About iBisnis
          </a>
          <a href="#" className="text-gray-700 font-bold text-md my-1">
            Contact Us
          </a>
          <a href="#" className="text-gray-700 font-bold text-md my-1">
            FAQ
          </a>
          <a href="#" className="text-gray-700 font-bold text-md my-1">
            Affiliate
          </a>
          <a href="#" className="text-gray-700 font-bold text-md my-1">
            Privacy Policy
          </a>
        </div>
        <div className="my-7 lg:w-[18%] flex flex-col">
          <h2 className="text-2xl font-bold mb-3">Category</h2>
          <a href="#" className="text-gray-700 font-bold text-md my-1">
            Business Profile
          </a>
          <a href="#" className="text-gray-700 font-bold text-md my-1">
            Restaurants
          </a>
          <a href="#" className="text-gray-700 font-bold text-md my-1">
            Hotels
          </a>
          <a href="#" className="text-gray-700 font-bold text-md my-1">
            Destinations
          </a>
          <a href="#" className="text-gray-700 font-bold text-md my-1">
            Classfied
          </a>
          <a href="#" className="text-gray-700 font-bold text-md my-1">
            Educations
          </a>
          <a href="#" className="text-gray-700 font-bold text-md my-1">
            Shop
          </a>
        </div>
        <div className="my-7 lg:w-[18%] flex flex-col">
          <h2 className="text-2xl font-bold mb-3">Our Service</h2>
          <a href="#" className="text-gray-700 font-bold text-md my-1">
            VIP Member
          </a>
          <a href="#" className="text-gray-700 font-bold text-md my-1">
            Website
          </a>
          <a href="#" className="text-gray-700 font-bold text-md my-1">
            CRM
          </a>
        </div>
        <div className="flex flex-col lg:w-[18%]">
          <div className="my-7 flex flex-col">
            <h2 className="text-2xl font-bold mb-3">Follow iBisnis</h2>
            <div className="flex flex-row">
              <a
                href="#"
                className="rounded-full w-10 h-10 bg-purple-500 mr-3 p-3 text-white"
              >
                <svg
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg>
              </a>
              <a
                href="#"
                className="rounded-full w-10 h-10 bg-purple-500 mr-3 p-3 text-white"
              >
                <svg
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                </svg>
              </a>
              <a
                href="#"
                className="rounded-full w-10 h-10 bg-purple-500 mr-3 p-3 text-white"
              >
                <svg
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="my-7 flex flex-col">
            <h2 className="text-2xl font-bold mb-3">Download iBisnis</h2>
            <a href="#" className="rounded-full w-32 h-10">
              <Image src={logo_download} width="500" height="164" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full py-5 bg-purple-500 text-center text-white">
        All rights reserved @ 2022 iBisnis
      </div>

      <div className="lg:hidden fixed z-30 bottom-0 w-screen flex flex-row justify-between rounded-tr-2xl rounded-tl-2xl h-12 bg-purple-500 shadow-2xl">
        <button
          onClick=""
          className="text-white text-md my-1 w-1/4 text-center"
        >
          <FontAwesomeIcon icon={faBars} />
          <p className="text-xs">Categories</p>
        </button>
        <button
          onClick={() => props.scrollToDiv("beranda")}
          className="text-white text-md my-1 w-1/4 text-center"
        >
          <FontAwesomeIcon icon={faHome} />
          <p className="text-xs">Beranda</p>
        </button>
        <button
          onClick={() => props.scrollToDiv("keuntungan")}
          className="text-white text-md my-1 w-1/4 text-center"
        >
          <FontAwesomeIcon icon={faHeart} />
          <p className="text-xs">Keuntungan</p>
        </button>
        <button
          onClick={() => props.scrollToDiv("kontak")}
          className="text-white text-md my-1 w-1/4 text-center"
        >
          <FontAwesomeIcon icon={faUserCircle} />
          <p className="text-xs">Hubungi</p>
        </button>
      </div>
    </div>
  );
}
export default Footer;
