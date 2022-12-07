import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faLanguage } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/images/icon-logo.png";
import logo_ibisnis from "../assets/images/logo-ibisnis.png";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
} from "react-instantsearch-dom";
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";

function Header() {
  const searchClient = instantMeiliSearch(
    "https://dummyjson.com/",
    ""
  );
  
  function Hit(props) {
    console.log(props);
    return (
        <div>
            <Highlight attribute="name" hit={props.hit} />
        </div>
    )
  }
  return (
    <div className="fixed z-20 flex justify-between top-0 left-0 w-full bg-white shadow-md">
      <div className="flex justify-between w-full lg:justify-start lg:w-auto">
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
        <div className="p-2 flex items-center mx-3 border-cyan-100 rounded-md">
          <InstantSearch
            indexName="?q"
            searchClient={searchClient}
          >
            <SearchBox className="hidden lg:block border-0 border-gray-200 py-1 px-3 rounded-lg absolute lg:relative lg:border-r-0" />
            <Hits hitComponent={Hit} />
          </InstantSearch>
          {/* <input
            className="hidden lg:block border-y-2 border-l-2 border-r-2 border-gray-200 py-1 px-3 rounded-l-lg absolute lg:relative lg:border-r-0"
            type="search"
            name=""
            id=""
            placeholder="Search Keyword"
          />
          <div className="lg:border-y-2 lg:border-r-2 lg:border-gray-200 p-1 px-2 rounded-r-lg">
            <FontAwesomeIcon icon={faSearch} />
          </div> */}
        </div>
      </div>
      <div className="hidden lg:flex lg:items-center">
        <select name="" id="" className="border-0 mx-3">
          <option value="Surabaya">Surabaya</option>
          <option value="Jakarta">Jakarta</option>
        </select>
        <div className="text-gray-500 mx-3">
          <FontAwesomeIcon icon={faLanguage} />
          <select name="" className="border-0 text-gray-500">
            <option value="">Language</option>
            <option value="IND">Indonesia</option>
          </select>
        </div>
        <div className="p-2">
          <a
            href="https://ibisnis.com/login"
            className="border-2 border-red-500 rounded-lg text-red-500 px-3 py-2 mt-5"
          >
            Login
          </a>
        </div>
        <a
          href="https://ibisnis.com/register"
          className="bg-red-600 text-white px-6 py-4"
        >
          Get Invited
        </a>
      </div>
    </div>
  );
}
export default Header;
