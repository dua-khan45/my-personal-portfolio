"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const Hero = () => {
  return (
    <section
      className="text-gray-400 bg-yellow-800 body-font bg-fixed bg-cover bg-center"
      id="home"
    >
      <div className="container mx-auto flex px-5 py-24 lg:flex-row flex-col items-center">
        {/* Text Section */}
        <div className="flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-10 md:mb-0 items-center text-center">
          <h1 className="title-font text-3xl font-medium text-white mb-4">
            Hello Coders!
            <br className="hidden lg:inline-block" />
          </h1>

          <p className="mb-8 leading-relaxed text-base">
            I&apos;m a passionate coder and tech enthusiast, driven to create
            seamless and impactful digital experiences. My journey in tech is
            fueled by curiosity and a dedication to mastering new skills.
            Let&apos;s connect and explore the world of coding together.
          </p>

          <div className="flex justify-center">
            <Link href={"#Contact"}>
              <button className="inline-flex text-white bg-zinc-500 border-0 py-2 px-6 focus:outline-none hover:bg-zinc-800 text-white rounded text-lg">
                Contact
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded mx-auto w-full  max-w-[300px] h-[400px]"
            width={300}
            height={400}
            alt="hero"
            src="/images/hero.jpg"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
