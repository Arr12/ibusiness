import React from "react";

function Register() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center mt-48 ">
      <div className="flex flex-col w-full md:w-1/2 mb-10">
        <h2 className="px-10 lg:px-24 mb-3 font-bold text-2xl">
          Kenapa IBisnis ?
        </h2>
        <p className="px-10 lg:px-24">
          Karena untuk bisa mendapatkan lebih banyak keuntungan, organisasi
          harus bisa menjual lebih banyak produk atau jasa kepada pelanggan,
          agar pelanggan mau membeli produk dan jasa lebih banyak, pelanggan
          harus bisa melihat keunggulan produk kita dibandingkan dengan
          kompetitor, dengan kata lain produk kita memenuhi ekspektasinya.
        </p>
      </div>
      <div className="flex flex-col bg-blue-600 rounded-2xl w-5/6 md:w-1/2 p-5 md:p-10 text-white">
        <h2 className="p-5 font-bold text-2xl">
          Daftarkan Bisnis Anda Sekarang !
        </h2>
        <hr />
        <form
          action="https://ibisnis.com/register"
          method="post"
          id="formRegister"
          className="flex flex-col p-5 mt-10"
        >
          <div className="flex flex-col my-2">
            <label htmlFor="">Email</label>
            <input
              id="checkEmail"
              name="email"
              type="email"
              value=""
              class="p-3 my-5 bg-white rounded-lg"
              required=""
            />
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="">Username</label>
            <input
              id="checkUsername"
              name="username"
              type="text"
              value=""
              class="p-3 my-5 bg-white rounded-lg"
              required=""
            />
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="">Password Confirm</label>
            <input
              id="confirmPassword"
              name="password_confirmation"
              type="password"
              class="p-3 my-5 bg-white rounded-lg"
              required=""
            ></input>
          </div>
          <label className="p-3">
            <input type="checkbox" name="terms_conditions" /> Saya telah membaca
            dan menyetujui{" "}
            <a href="terms" target="_blank">
              Aturan Pengguna
            </a>{" "}
            and{" "}
            <a href="policy" target="_blank">
              Kebijakan Privasi
            </a>
          </label>
          <button className="mt-16 py-3 px-3 bg-red-400 rounded-2xl">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default Register;
