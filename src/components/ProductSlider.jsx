<>
  <div>
    <div className="mt-48 px-10 lg:px-24 mb-3">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-2xl">Listing</h2>
        <a
          href="https://ibisnis.com/business"
          className="px-10 py-2 border-2 border-gray-300 rounded-md"
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
  </div>
  <div>
    <div className="mt-48 px-10 lg:px-24 mb-3">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-2xl">Hotel</h2>
        <a
          href="https://ibisnis.com/business"
          className="px-10 py-2 border-2 border-gray-300 rounded-md"
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
                    {v.title > 15 ? v.title.substring(0, 15) + "..." : v.title}
                  </h3>
                  <small className="text-gray-500">$ {v.price}</small>
                </div>
                <div className="flex flex-row ml-3 py-2">
                  <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
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

  <div>
    <div className="mt-48 px-10 lg:px-24 mb-3">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-2xl">Restaurant</h2>
        <a
          href="https://ibisnis.com/business"
          className="px-10 py-2 border-2 border-gray-300 rounded-md"
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
                    {v.title > 15 ? v.title.substring(0, 15) + "..." : v.title}
                  </h3>
                  <small className="text-gray-500">$ {v.price}</small>
                </div>
                <div className="flex flex-row ml-3 py-2">
                  <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
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
</>;
