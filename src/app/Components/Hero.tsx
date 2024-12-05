"use client"
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import Typewriter from 'typewriter-effect';

export default function Hero() {
  return (
    <div>
        <section className="text-blue-700 body-font bg-fixed bg-cover bg-center h-[600px] background-image">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-red-300">
        <sup>Hi</sup> i'm Shakeela <br />
        <Typewriter
  options={{
    strings: ['Frontend', 'Web Developer'],
    autoStart: true,
    loop: true,
  }}
/>
      </h1>
      <div className='w-[100px] h-[2px] bg-teal-100'></div>
      <p className="mb-8 leading-relaxed">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, velit suscipit. Id sapiente culpa voluptatibus amet recusandae cum eveniet obcaecati ex, aliquid nobis possimus dolor impedit, necessitatibus laborum voluptates commodi!
      </p>
      <div className="flex w-full md:justify-start justify-center items-end">
        <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
          <label
            htmlFor="hero-field"
            className="leading-7 text-sm text-gray-600"
          >
            Placeholder
          </label>
          <input
            type="text"
            id="hero-field"
            name="hero-field"
            className="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <Link href={"#Contact"}>
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Contact
        </button>
        </Link>
        
      </div>
      <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
        Upload Cv
      </p>
      
    </div>
    {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image src={require("../../../public/web.png")}
        className="object-cover object-center rounded"
        alt="hero"
    
      />
    </div> */}
  </div>
</section>

    </div>
  )
}


