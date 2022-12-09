import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faLanguage } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/images/icon-logo.png";
import logo_ibisnis from "../assets/images/logo-ibisnis.png";

function Header(props) {
  return (
    <div
      className={`fixed py-2 z-20 flex justify-between top-0 left-0 w-full md:py-5 px-10 ${
        props.offset > 10 ? "bg-purple-100 shadow-lg" : ""
      }`}
    >
      <div className="flex justify-between w-full lg:justify-start lg:w-auto opacity-1">
        <div className="pr-2">
          <Image width="55" height="55" src={logo} alt="" />
        </div>
        <div className="p-2">
          <Image
            className="mt-3"
            width="70"
            height="70"
            src={logo_ibisnis}
            alt=""
          />
        </div>
        <div className="ml-10 items-center hidden lg:flex">
          <div onClick={() => props.scrollToDiv("beranda")} className="py-3 mx-5 cursor-pointer">
            Beranda
          </div>
          <div onClick={() => props.scrollToDiv("keuntungan")} className="py-3 mx-5 cursor-pointer">
            Keuntungan
          </div>
          <div onClick={() => props.scrollToDiv("kontak")} className="py-3 mx-5 cursor-pointer">
            Hubungi
          </div>
        </div>
        <div className="p-2 flex items-center mx-3 border-cyan-100 rounded-md">
          {/* <input
            className="hidden lg:block border-y-2 border-l-2 border-r-2 border-gray-200 py-1 px-3 rounded-l-lg absolute lg:relative lg:border-r-0"
            type="search"
            name=""
            id=""
            placeholder="Search Keyword"
          /> */}
          <button
            onClick={() => props.setShowModal(true)}
            className="block lg:hidden p-1 px-2 rounded-r-lg"
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
      <div className="hidden lg:flex lg:items-center">
        {/* <select name="" id="" className="border-0 mx-3 bg-transparent">
          <option value="Surabaya">Surabaya</option>
          <option value="Jakarta">Jakarta</option>
        </select>
        <div className="text-gray-500 mx-3">
          <FontAwesomeIcon icon={faLanguage} />
          <select name="" className="border-0 text-gray-500 bg-transparent">
            <option value="">Language</option>
            <option value="IND">Indonesia</option>
          </select>
        </div> */}
        <a
          href="https://ibisnis.com/register"
          className="bg-white text-purple-500 px-6 py-4 rounded-full shadow-lg"
        >
          Get a Invited
        </a>
        <div className="p-2">
          <a
            href="https://ibisnis.com/login"
            className="border-2 border-transparent text-purple-500 px-3 py-2 mt-5 font-bold"
          >
            Login
          </a>
        </div>
        <button
          onClick={() => props.setShowModal(true)}
          className="hidden lg:block p-1 px-2 rounded-r-lg"
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
}
export default Header;
