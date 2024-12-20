import React from "react";
import Image from "next/image";
import { FaXTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import Headshot from "~/headshot3.jpg";

function Banner() {
  const links = [
    {
      icon: <FaGithub />,
      url: "https://github.com/lorrainemakuyana",
    },
    {
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/lorraine-makuyana/",
    },
    {
      icon: <FaXTwitter />,
      url: "https://x.com/lolomakuyana",
    },
  ];

  return (
    <section className="flex h-full w-full lg:w-1/3">
      <div className="my-auto space-y-5 rounded-3xl border border-purple-200 bg-transparent p-10 text-center">
        <p className="font-playfair text-3xl font-bold">Lorraine Makuyana</p>
        <Image
          width={200}
          height={200}
          className="h-full w-full rounded-xl object-contain"
          src={Headshot}
          alt="Headshot"
        />
        <div>
          <p className="font-playfair">Software Engineer</p>
          <p className="text-sm">United Kingdom</p>
        </div>
        <div className="flex flex-row justify-center space-x-6">
          {links.map((link, index) => (
            <div
              key={index}
              className="itemx-center flex cursor-pointer justify-center rounded-xl border border-x border-purple-200 p-3 text-purple-200 transition-transform hover:scale-105"
            >
              {link.icon}
            </div>
          ))}
        </div>
        <div className="w-full cursor-pointer rounded-xl bg-gradient-to-r from-pink-200 via-purple-300 to-purple-400 py-4 text-center font-playfair text-black hover:border-pink-200 hover:bg-transparent hover:text-white">
          Hire me!
        </div>
      </div>
    </section>
  );
}

export default Banner;
