import React from 'react';
import Footer from '../Footer/Footer';
import login from '../../../assets/login-bg.jpeg'
import { Link } from 'react-router-dom';
const SignIN = () => {
  return (
    <div>
      <div className="container w-full  mx-auto">
        <div className="flex justify-center h-screen">
          <div className="w-full  flex">
            <div
              className="w-full h-auto bg-gray-400 hidden lg:block  bg-cover rounded-l-lg"
              style={{
                backgroundImage: `url(${login})`,
              }}
            ></div>

            <div className="w-full bg-slate-800 p-5 text-white rounded-lg lg:rounded-l-none">
              <h3 className="pt-4 text-2xl text-center">Welcome Back!</h3>
              <form className="px-8 pt-6 pb-8 mb-4 bg-slate-800 rounded">
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-white"
                    for="username"
                  >
                    Username
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Username"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-white"
                    for="password"
                  >
                    Password
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-white border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="******************"
                  />
                  <p className="text-xs italic text-red-500">
                    Please choose a password.
                  </p>
                </div>
                <div className="mb-4">
                  <input
                    className="mr-2 leading-tight"
                    type="checkbox"
                    id="checkbox_id"
                  />
                  <label className="text-sm" for="checkbox_id">
                    Remember Me
                  </label>
                </div>
                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Sign In
                  </button>
                </div>
                <hr className="mb-6 border-t" />
                <div className="text-center">
                  <Link to="/signUp">
                    <h1
                      className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"                    >
                      Create an Account!
                    </h1>
                  </Link>
                </div>
                <div className="text-center">
                  <a
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    href="#"
                  >
                    Forgot Password?
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SignIN;