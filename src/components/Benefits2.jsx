"use client"

import React, { useState } from "react";
import Image from "next/image"

const Benefits2 = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className="w-full h-full lg:h-full dark-blue-bg relative flex align-top justify-center flex-col gap-10 text-center py-10 px-10">
      <div className="horizontal-line absolute top-0"></div>
      <h2 className="text-3xl md:text-7xl font-bold my-6">Let's Talk About Me 🤠</h2>
      <div className="grid lg:grid-flow-col grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 gap-8 w-1300 mx-auto">
        {/* 1 */}
        <div className="col-span-1 lg:col-span-2 h-96 grid-box flex-col w-full p-5 gap-5">
          <div className="text-left w-10/12 mx-auto">
            <h2 className="text-4xl mb-4 font-bold">Passion For Technologies</h2>
            <p>I love to build stuff from different technologies and I always try to make things that loved by people. </p>
          </div>
          <div className="grid grid-cols-7 grid-rows-2 gap-4 w-10/12 mx-auto">
            <div className="tech-box tech-box-1">
              {/* <Image src="/js.svg" alt="JavaScript Logo" width={30} height={30} /> */}
            </div>
            <div className="tech-box tech-box-1">
              {/* <Image src="/html.svg" alt="JavaScript Logo" width={30} height={30} /> */}
            </div>
            <div className="tech-box tech-box-2">
              {/* <Image src="/css.svg" alt="JavaScript Logo" width={30} height={30} /> */}
            </div>
            <div className="tech-box tech-box-3">
              {/* <Image src="/react.svg" alt="JavaScript Logo" width={30} height={30} /> */}
            </div>
            <div className="tech-box tech-box-4">
              {/* <Image src="/nextjs.svg" alt="JavaScript Logo" width={30} height={30} /> */}
            </div>
            <div className="tech-box tech-box-5">
              {/* <Image src="/firebase.svg" alt="JavaScript Logo" width={30} height={30} /> */}
            </div>
            <div className="tech-box tech-box-6">
              {/* <Image src="/typescript.svg" alt="JavaScript Logo" width={30} height={30} /> */}
            </div>
            <div className="tech-box tech-box-7">
              {/* <Image src="/tailwind.svg" alt="JavaScript Logo" width={30} height={30} /> */}
            </div>
            <div className="tech-box tech-box-8">
              {/* <Image src="/bootstrap.svg" alt="JavaScript Logo" width={30} height={30} /> */}
            </div>
            <div className="tech-box tech-box-9">
              {/* <Image src="/graphql.svg" alt="JavaScript Logo" width={30} height={30} /> */}
            </div>
            <div className="tech-box tech-box-10">
              {/* <Image src="/git.svg" alt="JavaScript Logo" width={30} height={30} /> */}
            </div>
            <div className="tech-box tech-box-11">
              {/* <Image src="/github.svg" alt="JavaScript Logo" width={30} height={30} /> */}
            </div>
            <div className="tech-box tech-box-12">
              {/* <Image src="/sass.svg" alt="JavaScript Logo" width={30} height={30} /> */}
            </div>
            <div className="tech-box tech-box-13">
              {/* <Image src="/node.svg" alt="JavaScript Logo" width={30} height={30} /> */}
            </div>
          </div>
        </div>
        {/* 4 */}
        <div
          className={`h-96 grid-box items-start flex-col p-4 threed-box`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h2 className="text-3xl font-bold text-left">
            I am a <span className="">Builder</span>
          </h2>
          <p className="text-left">
            I love to build cool stuff on the internet. I participate in hackathons
            and meetups to meet people with the same mindset as me.
          </p>
          {/* <Image */}
            src="/3d.png"
            className={`threed-obj ml-10 mt-6 ${isHovered ? "infinite-rotate" : ""}`}
            alt=""
            width={180}
            height={180}
          />
        </div>
        {/* 2 */}
        <div className="lg:col-start-3 h-96 grid-box p-5 flex flex-col">
          <div className="flex flex-col w-full overflow-hidden relative max-h-52 rd-box">
            {/* <Image src="/rd-1.svg" alt="" width={170} height={170} className="translate-x-24" /> */}
            {/* <Image src="/rd-2.svg" alt="" width={150} height={150} className="tranlate-nb-16" /> */}
            {/* <Image src="/rd-3.svg" alt="" width={120} height={120} className="tranlate-nb-10" /> */}
          </div>
          <h2 className="text-left text-3xl font-bold mt-2">Responsive-first design</h2>
          <p className="text-left mt-2">No need to worry about Responsiveness</p>
        </div>
        {/* 3 */}
        <div className="h-96 grid-box flex-col figma-box overflow-hidden">
          <div className="text-left p-3">
            <h2 className="text-3xl font-bold text-gray-300 mb-2">Figma's Expert</h2>
            <p>I have been using Figma, since when I started programming.</p>
          </div>
          <div className="flex justify-between w-full mt-4">
            {/* <Image src="/figma-logo.svg" alt="JavaScript Logo" width={150} height={150} className="translate-x-10-neg transition-all duration-800" /> */}
            {/* <Image src="/new-star.svg" alt="JavaScript Logo" width={200} height={200} className="translate-x-10 transition-all duration-800" /> */}
          </div>
        </div>
        
        {/* 3 */}
        <div className=" h-96 grid-box flex-col p-4 seo-box">
          <p className="text-left text-3xl pt-4 font-bold">No More Compromise <br /> with</p>
          <h2 className="text-center italic font-bold neon text-7xl">SEO</h2>
        </div>
        {/* 4 */}
        <div className="col-span-1 lg:col-span-2 h-96 grid-box flex-col text-center w-full">
          <h2 className="text-left pl-6 text-4xl my-10 font-bold">Clean Work <br /> &  Smooth Flow</h2>
          <div className="relative w-full h-56 overflow-hidden bg-transparent left-right-hover">
            <div className="absolute inset-0 flex w-fit mb-8" id="main-slider"
              onMouseEnter={() => {
                const div = document.getElementById("main-slider");
                div.classList.add("translate-n-50", "transition-3-sec");
              }}

              onMouseLeave={() => {
                const div = document.getElementById("main-slider");
                div.classList.remove("translate-n-50");
              }}>
              <div className="w-48 mx-5 transition-transform duration-500 ease-in-out hover:translate-x-1/6 user-box user-box-1">
                <ul className="flex gap-2">
                  {/* <Image src="/human-1.png" alt="" width={30} height={30} className="object-cover rounded-full bg-white w-6 h-6" /> */}
                  <h2>Sofia</h2>
                </ul>
                <p>I am a graphic designer.</p>
                <button className="rounded-full py-1 px-3 text-sm">See my work</button>
              </div>
              <div className="w-48 mx-5 transition-transform duration-500 ease-in-out hover:translate-x-1/6 user-box user-box-2">
                <ul className="flex gap-2">
                  {/* <Image src="/human-2.png" alt="" width={30} height={30} className="object-cover rounded-full bg-white w-6 h-6" /> */}
                  <h2>Adam</h2>
                </ul>
                <p>I am content writer.</p>
                <button className="rounded-full py-1 px-3 text-sm">See my work</button>
              </div>
              <div className="w-48 mx-5 transition-transform duration-500 ease-in-out hover:translate-x-1/6 user-box user-box-3">
                <ul className="flex gap-2">
                  {/* <Image src="/human-3.png" alt="" width={30} height={30} className="object-cover rounded-full bg-white w-6 h-6" /> */}
                  <h2>Tom</h2>
                </ul>
                <p>I am a product developer.</p>
                <button className="rounded-full py-1 px-3 text-sm">See my work</button>
              </div>
              <div className="w-48 mx-5 transition-transform duration-500 ease-in-out hover:-translate-x-1/6 user-box user-box-4">
                <ul className="flex gap-2">
                  {/* <Image src="/human-4.png" alt="" width={30} height={30} className="object-cover rounded-full bg-white w-6 h-6" /> */}
                  <h2>Kavya</h2>
                </ul>
                <p>I am a fashion designer.</p>
                <button className="rounded-full py-1 px-3 text-sm">See my work</button>
              </div>
              <div className="w-48 mx-5 transition-transform duration-500 ease-in-out hover:-translate-x-1/6 user-box user-box-5">
                <ul className="flex gap-2">
                  {/* <Image src="/human-5.png" alt="" width={30} height={30} className="object-cover rounded-full bg-white w-6 h-6" /> */}
                  <h2>Chhavi</h2>
                </ul>
                <p>I am an expert chef.</p>
                <button className="rounded-full py-1 px-3 text-sm">See my work</button>
              </div>
              <div className="w-48 mx-5 transition-transform duration-500 ease-in-out hover:-translate-x-1/6 user-box user-box-6">
                <ul className="flex gap-2">
                  {/* <Image src="/human-6.png" alt="" width={30} height={30} className="object-cover rounded-full bg-white w-6 h-6" /> */}
                  <h2>Sam</h2>
                </ul>
                <p>I am an animal trainer.</p>
                <button className="rounded-full py-1 px-3 text-sm">See my work</button>
              </div>
            </div>
          </div>
        </div>
        {/* 5 */}
        <div
          className="h-96 grid-box w-full gpt-box overflow-hidden p-4 text-left transition-all duration-700"
          onMouseEnter={() => {
            // // const image = document.getElementById("gpt-image");
            // image.classList.add("rotate-center", "translate-y-4");
          }}

          onMouseLeave={() => {
            // // const image = document.getElementById("gpt-image");
            // image.classList.remove("rotate-center", "translate-y-10");
          }}

        >
          <h2 className="text-5xl font-bold">10X Faster</h2>
          <p className="text-lg mt-2">
            With the power of <span className="underline">Prompt Engenerring</span>, I have become a 10X fast dev, I can learn fast, build fast, and deploy the product super fast.
          </p>
          {/* {/* <Image id="gpt-image" src="/chatgpt.svg" className="translate-y-10 self-center transition-all duration-500" width={200} height={200} /> */} */}
        </div>
      </div>
      <div className="horizontal-line absolute bottom-0"></div>
    </div>
  )
}

export default Benefits2