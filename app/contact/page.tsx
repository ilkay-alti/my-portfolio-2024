"use client";
import SubmitMessage from "@/components/SubmitMessage/SubmitMessage";
import Image from "next/image";
import React, { useState } from "react";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const date = new Date().toDateString();

  return (
    <div className="flex flex-col h-full">
      {/* Header Section */}
      <div className="flex h-[44px] border-b border-[#1E2D3D]">
        <div className="flex px-[14px] items-center gap-11 border-r border-[#1E2D3D] h-full">
          <span className="text-[#607B96]">contacts</span>
          <Image
            src="/close-icon.svg"
            alt="Close icon"
            width={18}
            height={18}
          />
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex h-full">
        {/* Left Side: Submit Message Form */}
        <div className="px-[40px] border-r border-[#1E2D3D] flex justify-center">
          <SubmitMessage
            setName={setName}
            setEmail={setEmail}
            setMessage={setMessage}
          />
        </div>

        {/* Right Side: Code Display */}
        <div className="flex items-center">
          <div className="flex flex-col flex-grow px-[40px] max-w-[569px] text-[#5565E8]">
            <span>
              <span className="text-[#C98BDF]">const</span> button{" "}
              <span className="text-[#C98BDF]">=</span>{" "}
              <span className="text-[#FEA55F]">
                document.querySelector(&apos;#sendBtn&apos;);
              </span>
            </span>
            <span>
              <span className="text-[#C98BDF]">const</span> message{" "}
              <span className="text-[#C98BDF]">=</span> {"{"}
            </span>
            <span>
              name<span className="text-[#607B96]">: </span>
              <span className="text-[#FEA55F]">&quot;{name}&quot;,</span>
            </span>
            <span>
              email<span className="text-[#607B96]">: </span>
              <span className="text-[#FEA55F]">&quot;{email}&quot;,</span>
            </span>
            <span>
              message<span className="text-[#607B96]">: </span>
              <span className="text-[#FEA55F]">&quot;{message}&quot;,</span>
            </span>
            <span>
              date<span className="text-[#607B96]">: </span>
              <span className="text-[#FEA55F]">&quot;{date}&quot;,</span>
            </span>
            <span className="text-[#607B96]">{"}"};</span>
            <span className="text-[#607B96]">
              <span className="text-[#C98BDF]">button.addEventListener</span>(
              <span className="text-[#FEA55F]">&apos;click&apos;</span>,
              <span className="text-[#C98BDF]">()</span> {"=>"} {"{"}
            </span>
            <span>form.send(message);</span>
            <span className="text-[#607B96]">{"});"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
