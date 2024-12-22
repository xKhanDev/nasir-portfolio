import React, { useState } from "react";
import { ethers } from "ethers";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Loading from "../../../components/Loading";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [input, setInput] = useState({
    identifier: "",
    password: "",
  });
  const Navigate = useNavigate();

  const connectWallet = async () => {
    setLoading(true);

    // Check if MetaMask is installed
    if (!window.ethereum) {
      toast.error("Please install MetaMask");
      setLoading(false);
      return;
    }

    try {
      // Create provider using ethers
      const provider = new ethers.BrowserProvider(window.ethereum);

      // Request the accounts from MetaMask
      const accounts = await provider.send("eth_requestAccounts", []);
      const address = accounts[0]; // Directly use the first account

      // Post the wallet address to the backend for login
      const response = await axios.post(
        "/dashboared/auth/connect",
        { walletAddress: address },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data?.error) throw new Error(response.data.error);

      localStorage.setItem("admin", JSON.stringify(response.data));
      Navigate("/admin/dashboard");
      toast.success("Login successfully");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false); // Ensure this is only called once
    }
  };

  const handleLogin = async (e) => {
    setLoginLoading(true);
    e.preventDefault();
    console.log(input);
    try {
      const response = await axios.post("/dashboared/auth/login", input, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.data?.error) throw new Error(response.data.error);

      localStorage.setItem("admin", JSON.stringify(response.data));
      console.log(response.data);

      toast.success("Login successful");
      Navigate("/admin/dashboard");
      setLoginLoading(false);
    } catch (error) {
      toast.error(error.message);
      setLoginLoading(false);
    } finally {
      setLoginLoading(false);
    }
  };

  return (
    <div className="container h-screen flex flex-col justify-center items-center">
      <div className="w-full max-w-xs lg:w-1/2 border-white border-2 rounded-lg p-4">
        <h1 className="text-4xl text-center font-semibold capitalize">
          Admin Login
        </h1>
        <form action="" className="mt-8 w-full flex flex-col gap-4">
          <button
            className="w-full bg-[#58629d] py-2 h-12 rounded-lg transition hover:bg-white hover:text-[#58629d] duration-300 ease-in-out"
            disabled={loading}
            onClick={connectWallet}
          >
            {loading ? <Loading /> : "Connect Wallet"}
          </button>
          <div className="flex w-full items-center justify-between">
            <span className="w-full bg-white h-[1px] rounded-xl"></span>
            <p className="px-2 text-xl">OR</p>
            <span className="w-full bg-white h-[1px] rounded-xl"></span>
          </div>
          <input
            type="email"
            value={input.identifier}
            placeholder="Enter email..."
            className="w-full bg-white text-black rounded-lg input input-bordered"
            onChange={(e) => setInput({ ...input, identifier: e.target.value })}
          />
          <input
            type="password"
            value={input.password}
            placeholder="Enter password..."
            className="w-full bg-white input text-black input-bordered rounded-lg"
            onChange={(e) => setInput({ ...input, password: e.target.value })}
          />
          <button
            className="w-full bg-[#58629d] py-2 h-12 rounded-lg transition hover:bg-white hover:text-[#58629d] duration-300 ease-in-out"
            disabled={loginLoading}
            onClick={handleLogin}
          >
            {loginLoading ? <Loading /> : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
