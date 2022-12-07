import React, { useState, useEffect } from "react";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
} from "react-instantsearch-dom";
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
function ModalSearch(props) {
  //   const searchClient = instantMeiliSearch("https://dummyjson.com/", "");
  const searchClient = false;

  function Hit(props) {
    return (
      <div>
        <Highlight attribute="name" hit={props.hit} />
      </div>
    );
  }
  return (
    <div
      className={`${
        props.showModal === true ? "block" : "hidden"
      } top-0 z-30 fixed w-screen h-screen bg-gray-200`}
    >
      <button className="ml-3 mt-3" onClick={() => props.setShowModal(false)}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <InstantSearch indexName="?q" searchClient={searchClient}>
        <SearchBox className="top-1/2 left-[20%] border-0 border-gray-200 py-1 px-3 rounded-lg absolute lg:relative lg:border-r-0" />
        <Hits hitComponent={Hit} />
      </InstantSearch>
    </div>
  );
}
export default ModalSearch;
