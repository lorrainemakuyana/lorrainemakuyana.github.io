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
    <section className="flex w-full flex-col lg:fixed lg:w-1/3">
      <div className="rounded-3xl border border-purple-200 bg-transparent p-10">
        <p className="font-raleway text-2xl font-bold">Lorraine Makuyana</p>
        <Image
          width={200}
          height={200}
          className="h-full w-full object-contain"
          src={Headshot}
          alt="Headshot"
        />
        <p>Software Engineer</p>
        <p>Based in the UK</p>
        <div className="flex flex-row justify-center space-x-5">
          {links.map((link, index) => (
            <div
              key={index}
              className="itemx-center flex cursor-pointer justify-center border border-x border-purple-200 text-purple-200 transition-transform hover:scale-105"
            >
              {link.icon}
            </div>
          ))}
        </div>
        <div className="w-full cursor-pointer bg-gradient-to-r from-pink-200 via-purple-300 to-purple-400 text-center">
          Hire me!
        </div>
      </div>
    </section>
  );
}

export default Banner;
