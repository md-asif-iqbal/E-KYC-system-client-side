import React from 'react';
import Footer from '../Footer/Footer';
import login from'../../../assets/login-bg.jpeg'
const SignIN = () => {
    return (
      <div>
        <div class="container w-full  mx-auto">
          <div class="flex justify-center h-screen">
            <div class="w-full  flex">
              <div
                class="w-full h-auto bg-gray-400 hidden lg:block  bg-cover rounded-l-lg"
                style={{
                  backgroundImage: `url(${login})`,
                }}
              ></div>

              <div class="w-full bg-slate-800 p-5 text-white rounded-lg lg:rounded-l-none">
                <h3 class="pt-4 text-2xl text-center">Welcome Back!</h3>
                <form class="px-8 pt-6 pb-8 mb-4 bg-slate-800 rounded">
                  <div class="mb-4">
                    <label
                      class="block mb-2 text-sm font-bold text-white"
                      for="username"
                    >
                      Username
                    </label>
                    <input
                      class="w-full px-3 py-2 text-sm leading-tight text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder="Username"
                    />
                  </div>
                  <div class="mb-4">
                    <label
                      class="block mb-2 text-sm font-bold text-white"
                      for="password"
                    >
                      Password
                    </label>
                    <input
                      class="w-full px-3 py-2 mb-3 text-sm leading-tight text-white border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      placeholder="******************"
                    />
                    <p class="text-xs italic text-red-500">
                      Please choose a password.
                    </p>
                  </div>
                  <div class="mb-4">
                    <input
                      class="mr-2 leading-tight"
                      type="checkbox"
                      id="checkbox_id"
                    />
                    <label class="text-sm" for="checkbox_id">
                      Remember Me
                    </label>
                  </div>
                  <div class="mb-6 text-center">
                    <button
                      class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      Sign In
                    </button>
                  </div>
                  <hr class="mb-6 border-t" />
                  <div class="text-center">
                    <a
                      class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                      href="#"
                    >
                      Create an Account!
                    </a>
                  </div>
                  <div class="text-center">
                    <a
                      class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
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