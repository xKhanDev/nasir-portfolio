import React from "react";

const Login = () => {
  return (
    <div className="container h-screen flex flex-col justify-center items-center">
      <div className="w-full max-w-xs lg:w-1/2 border-white border-2 rounded-lg p-4">
        <h1 className="text-5xl text-center font-semibold capitalize">
          Admin Login
        </h1>
        <form action="" className="mt-8 w-full flex flex-col gap-4">
          <button className="w-full bg-[#58629d] py-2 h-12 rounded-lg transition hover:bg-white duration-300 ease-in-out">
            Connect Wallet
          </button>
          <div className="flex w-full items-center justify-between">
            <span className="w-full bg-white h-[1px] rounded-xl"></span>
            <p className="px-2 text-2xl">OR</p>
            <span className="w-full bg-white h-[1px] rounded-xl"></span>
          </div>
          <input
            type="email"
            placeholder="Enter email..."
            className="w-full bg-white rounded-lg input input-bordered"
          />
          <input
            type="password"
            placeholder="Enter password..."
            className="w-full bg-white input input-bordered rounded-lg"
          />
          <button className="w-full bg-[#58629d] py-2 h-12 rounded-lg transition hover:bg-white duration-300 ease-in-out">
            Sigin
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
