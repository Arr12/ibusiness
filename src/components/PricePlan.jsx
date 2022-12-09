import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

function PricePlan() {
  return (
    <div className="my-48 px-10 lg:px-24 mb-3">
      <div className="flex flex-col justify-between items-center">
        <h2 className="font-bold text-2xl mb-4">Price Plan</h2>
        <p>Daftar harga yang lagi trending.</p>
        <div className="w-full overflow-auto">
          <div className="flex flex-row border-b-2 w-[90.5rem] mt-16">
            <div className="flex flex-col w-[23rem] bg-slate-100 p-5 rounded-2xl justify-center">
              <h2 className="font-bold text-2xl mb-1 w-[23rem]">Kontak Kami!</h2>
              <div className="font-bold text-blue-500 flex flex-row items-center">
                <p className="mr-5">Get Started</p>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
            <div className="flex flex-col w-[14rem] px-7 py-3">
              <h2 className="font-bold text-xl">Free</h2>
              <div className="font-bold text-gray-700 flex flex-row items-center mb-3">
                <p className="font-bold text-2xl">Rp 0,- &nbsp;</p>
                <small className="text-gray-200">/Bulan</small>
              </div>
              <a
                className="bg-blue-50 mt-3 text-blue-500 w-32 px-4 py-2 font-bold"
                href="#"
              >
                Choose Plan
              </a>
            </div>
            <div className="flex flex-col w-[14rem] px-7 py-3">
              <h2 className="font-bold text-xl">Silver</h2>
              <div className="font-bold text-gray-700 flex flex-row items-center mb-3">
                <p className="font-bold text-2xl">Rp 2.500.000,- &nbsp;</p>
                <small className="text-gray-200">/Bulan</small>
              </div>
              <a
                className="bg-blue-50 mt-3 text-blue-500 w-32 px-4 py-2 font-bold"
                href="#"
              >
                Choose Plan
              </a>
            </div>
            <div className="flex flex-col w-[14rem] px-7 py-10 bg-blue-600 rounded-tl-2xl rounded-tr-2xl">
              <h2 className="font-bold text-xl text-white">Gold</h2>
              <div className="font-bold text-gray-700 flex flex-row items-center mb-3">
                <p className="font-bold text-white text-2xl">Rp 5.500.000,- &nbsp;</p>
                <small className="text-gray-200">/Bulan</small>
              </div>
              <a className="hidden" href="#">
                Choose Plan
              </a>
            </div>
            <div className="flex flex-col w-[14rem] px-7 py-3">
              <h2 className="font-bold text-xl">Platinum</h2>
              <div className="font-bold text-gray-700 flex flex-row items-center mb-3">
                <p className="font-bold text-2xl">Rp 7.500.000,- &nbsp;</p>
                <small className="text-gray-200">/Bulan</small>
              </div>
              <a
                className="bg-blue-50 mt-3 text-blue-500 w-32 px-4 py-2 font-bold"
                href="#"
              >
                Choose Plan
              </a>
            </div>
          </div>
          <div className="flex flex-row border-b-2 w-[90.5rem] bg-blue-600 px-3 pt-3">
            <div className="flex flex-col w-[23rem] bg-blue-600 p-5 rounded-lg justify-center text-white">
              <p className="text-md mb-1 w-[23rem]">300GB Spaces</p>
            </div>
            <div className="flex flex-col w-[13.7rem] px-6 py-7 bg-white justify-center rounded-tl-2xl">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-blue-600 text-2xl"
              />
            </div>
            <div className="flex flex-col w-[13.7rem] px-6 py-7 bg-white justify-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-blue-600 text-2xl"
              />
            </div>
            <div className="flex flex-col w-[13.7rem] px-6 py-7 bg-blue-600 justify-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-white text-2xl"
              />
            </div>
            <div className="flex flex-col w-[13.7rem] px-6 py-7 bg-white justify-center rounded-tr-2xl">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-blue-600 text-2xl"
              />
            </div>
          </div>
          <div className="flex flex-row border-b-2 w-[90.5rem] bg-blue-600 px-3">
            <div className="flex flex-col w-[23rem] bg-blue-600 p-5 rounded-lg justify-center text-white">
              <p className="text-md mb-1 w-[23rem]"> Free 1 Year Domain .com</p>
            </div>
            <div className="flex flex-col w-[13.7rem] px-6 py-7 bg-white justify-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-blue-600 text-2xl"
              />
            </div>
            <div className="flex flex-col w-[13.7rem] px-6 py-7 bg-white justify-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-blue-600 text-2xl"
              />
            </div>
            <div className="flex flex-col w-[13.7rem] px-6 py-7 bg-blue-600 justify-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-white text-2xl"
              />
            </div>
            <div className="flex flex-col w-[13.7rem] px-6 py-7 bg-white justify-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-blue-600 text-2xl"
              />
            </div>
          </div>
          <div className="flex flex-row border-b-2 w-[90.5rem] bg-blue-600 px-3">
            <div className="flex flex-col w-[23rem] bg-blue-600 p-5 rounded-lg justify-center text-white">
              <p className="text-md mb-1 w-[23rem]">Fatest Engine</p>
            </div>
            <div className="flex flex-col w-[13.7rem] px-6 py-7 bg-white justify-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-blue-600 text-2xl"
              />
            </div>
            <div className="flex flex-col w-[13.7rem] px-6 py-7 bg-white justify-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-blue-600 text-2xl"
              />
            </div>
            <div className="flex flex-col w-[13.7rem] px-6 py-7 bg-blue-600 justify-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-white text-2xl"
              />
            </div>
            <div className="flex flex-col w-[13.7rem] px-6 py-7 bg-white justify-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-blue-600 text-2xl"
              />
            </div>
          </div>
          <div className="flex flex-row border-b-2 w-[90.5rem] rounded-bl-2xl rounded-br-2xl bg-blue-600 px-3 pb-3">
            <div className="flex flex-col w-[23rem] bg-blue-600 p-5 rounded-lg justify-center text-white">
              <p className="text-md mb-1 w-[23rem]">Free Maintenance</p>
            </div>
            <div className="flex flex-col w-[13.7rem] px-6 py-7 bg-white justify-center rounded-bl-2xl">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-blue-600 text-2xl"
              />
            </div>
            <div className="flex flex-col w-[13.7rem] px-6 py-7 bg-white justify-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-blue-600 text-2xl"
              />
            </div>
            <div className="flex flex-col w-[13.7rem] px-6 py-7 bg-blue-600 justify-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-white text-2xl"
              />
            </div>
            <div className="flex flex-col w-[13.7rem] px-6 py-7 bg-white justify-center rounded-br-2xl">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-blue-600 text-2xl"
              />
            </div>
          </div>
          <div className="flex flex-row border-b-2 w-[90.5rem] px-3 pb-3">
            <div className="flex flex-col w-[23rem] p-5 rounded-lg justify-center text-white">
                <p className="w-[23rem]"></p>
            </div>
            <div className="flex flex-col w-[13.7rem] px-6 py-3 justify-center rounded-br-2xl"></div>
            <div className="flex flex-col w-[13.7rem] px-6 py-3 justify-center rounded-br-2xl"></div>
            <div className="flex flex-col w-[13.7rem] px-6 py-7 justify-center bg-blue-600 rounded-br-2xl rounded-bl-2xl">
              <button className="text-blue-600 bg-yellow-100 px-6 py-3 rounded-lg">
                Choose Plan
              </button>
            </div>
            <div className="flex flex-col w-[13.7rem] px-6 py-3 justify-center rounded-br-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PricePlan;
