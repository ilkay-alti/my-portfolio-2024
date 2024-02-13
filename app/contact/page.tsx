"use client";
import SubmitMessage from "@/components/SubmitMessage/SubmitMessage";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const d = new Date();
  useEffect(() => {
    console.log(name);
  }, [name]);

  return (
    <div className="flex flex-col h-full ">
      <div className="flex h-[41px] border-b border-[#1E2D3D] ">
        <div className="flex px-[14px] items-center gap-11 border-[#1E2D3D] border-r h-full">
          <label className="text-[#607B96]">contacts</label>
          <Image src="/close-icon.svg" alt="1" width={18} height={18} />
        </div>
      </div>
      <div className="flex h-full">
        <div className="px-[40px] border-r border-[#1E2D3D] flex justify-center ">
          <SubmitMessage
            setName={setName}
            setEmail={setEmail}
            setMessage={setMessage}
          />
        </div>
        <div className="flex items-center">
          <div className="flex flex-col flex-grow px-[40px] max-w-[569px] text-[#5565E8]">
            <label>
              <a className="text-[#C98BDF]">const</a> button{" "}
              <a className="text-[#C98BDF]">&#61;</a>{" "}
              <a className="text-[#FEA55F]">
                document.querySelector('#sendBtn');
              </a>
            </label>
            <label>
              <a className="text-[#C98BDF]">const</a> message{" "}
              <a className="text-[#C98BDF]">&#61;</a> &#123;{" "}
            </label>
            <label>
              name<a className="text-[#607B96]">: </a>
              <a className="text-[#FEA55F]">"{name}",</a>
            </label>
            <label>
              email<a className="text-[#607B96]">: </a>{" "}
              <a className="text-[#FEA55F]">"{email}",</a>
            </label>
            <label>
              message<a className="text-[#607B96]">: </a>{" "}
              <a className="text-[#FEA55F]">"{message}",</a>
            </label>
            <label>
              <a className="text-[#607B96]">date</a>
              <a className="text-[#607B96]">: </a> "{d.toDateString()}",
            </label>
            <label className="text-[#607B96]">&#125;;</label>
            <label className="text-[#607B96]">
              <a className="text-[#C98BDF]">button.addEventListener</a>
              &#40;
              <a className="text-[#FEA55F]">'click'</a>,
              <a className="text-[#C98BDF]">&#40;&#41;</a> &#61;&#62; &#123;
            </label>
            <label>form.send(message);</label>
            <label className="text-[#607B96]">&#125;&#41;;</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
// "flex items-center justify-center h-full px-8 border-r border-[#1E2D3D] "
