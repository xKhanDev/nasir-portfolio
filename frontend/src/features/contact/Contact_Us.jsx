import React, { useState } from "react";
import axios from "axios";
import { IoSend } from "react-icons/io5";
import Partition from "../../components/Partition";
import { toast } from "react-hot-toast";
import Loading from "../../components/Loading";

const Contact_Us = () => {
  const [loading, setLoading] = useState(false);
  const [sended, setSended] = useState(false);
  const [inputs, setInputs] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("/form/contact_us", inputs, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.data?.error) throw new Error(response.data.error);

      toast.success("Message sent successfully");
      setLoading(false);
      setSended(true);
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-full flex flex-col items-center gap-4 mb-4" id="contact">
      <Partition name={"~/contact/get-in-touch"} />
      {!sended ? (
        <form
          action="submit"
          onSubmit={handleSubmit}
          className="w-full md:w-[70%] lg:w-1/2 flex flex-col gap-4 border-white border-2 p-8 rounded-xl"
        >
          <input
            type="text"
            value={inputs?.fullname}
            placeholder="Enter Name..."
            className="input bg-transparent border-b-2 border-white"
            onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })}
          />
          <input
            type="email"
            value={inputs?.email}
            placeholder="Enter Email..."
            className="input bg-transparent border-b-2 border-white"
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          />
          <input
            type="text"
            value={inputs?.subject}
            placeholder="Enter Subject..."
            className="input bg-transparent border-b-2 border-white"
            onChange={(e) => setInputs({ ...inputs, subject: e.target.value })}
          />
          <textarea
            name="message"
            value={inputs?.message}
            cols="30"
            rows="10"
            placeholder="Enter Your Message"
            className="bg-transparent border-2 border-white rounded-xl p-4 focus:outline-none"
            onChange={(e) => setInputs({ ...inputs, message: e.target.value })}
          />
          <button
            type="submit"
            className="flex items-center gap-2 mt-4 mx-auto text-xl s_text bg-[#1f325e] py-2 px-4 rounded-xl hover:bg-[#70e7d6] hover:text-[#1f325e] ease-in-out duration-300"
          >
            {loading ? (
              <Loading />
            ) : (
              <>
                Send <IoSend />
              </>
            )}
          </button>
        </form>
      ) : (
        <div className="*:text-2xl *:text-center">
          <p>
            Hello{" "}
            <span className="font-bold capitalize">{inputs?.fullname}</span>🎉,
            your message has been sent successfully
          </p>
          <p>Thanks for reaching out to us</p>
          <p className="text-[#70e7d6]">I will in touch with you via Email.</p>
        </div>
      )}
      <div className="mt-16">
        <span>All Right Reserved by safeer ullah @2024</span>
      </div>
    </div>
  );
};

export default Contact_Us;
