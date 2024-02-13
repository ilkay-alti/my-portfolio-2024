"use client";
import React, { FC, FormEvent, useState } from "react";
import { Button } from "../Button/Button";

interface SubmitMessageProps {
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setMessage: (message: string) => void;
}

const SubmitMessage: FC<SubmitMessageProps> = ({
  setName,
  setEmail,
  setMessage,
}) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSend(false);

    // Handle form submission logic here
  };

  const [send, setSend] = useState(true);
  return send ? (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center h-full flex-col gap-6 text-[#607B96] "
    >
      <div className="flex items-start justify-center flex-col gap-[10px]">
        <label>_name:</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Ilkay altinisik"
          className="w-[372px] h-[41px] rounded-lg border-[#1E2D3D] border-[1px] px-[14px] bg-transparent text-[#465E77]  focus:shadow-md focus:shadow-cyan-500/50 focus:outline-none focus:border-[#607B96] transition-all duration-300 ease-in-out"
        />
      </div>
      <div className="flex items-start justify-center flex-col gap-[10px]">
        <label>_email:</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="info@ilkay.com"
          className="w-[372px] h-[41px] rounded-lg border-[#1E2D3D] border-[1px] px-[14px] bg-transparent text-[#465E77]  focus:shadow-md focus:shadow-cyan-500/50 focus:outline-none focus:border-[#607B96] transition-all duration-300 ease-in-out"
        />
      </div>
      <div className="flex items-start justify-center flex-col gap-[10px]">
        <label>_message:</label>

        <textarea
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message"
          className="w-[372px] h-[82px] rounded-lg border-[#1E2D3D] border-[1px] pt-2 px-[14px] bg-transparent text-[#465E77]  focus:shadow-md focus:shadow-cyan-500/50 focus:outline-none focus:border-[#607B96] transition-all duration-300 ease-in-out"
        />
      </div>
      <Button className="w-[180px]" type="submit">
        submit-message
      </Button>
    </form>
  ) : (
    <div className="flex items-center justify-center h-full flex-col gap-6 text-[#607B96] w-[372px] ">
      <label className="text-white text-3xl">Thank you! 🤘</label>
      <label>
        Your message has been accepted. You will recieve answer really soon!
      </label>
      <Button
        onClick={() => {
          setSend(true);
        }}
      >
        send-new-message
      </Button>
    </div>
  );
};

export default SubmitMessage;
