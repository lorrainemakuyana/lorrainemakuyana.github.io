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
    <section className="flex flex-col w-full lg:w-1/3 lg:fixed">
      <div className="bg-transparent border rounded-3xl border-purple-200 p-10">
        <p className="font-raleway font-bold text-2xl">Lorraine Makuyana</p>
        <Image
          width={200}
          height={200}
          className="w-full h-full object-contain"
          src={Headshot}
          alt="Headshot"
        />
        <p>Software Engineer</p>
        <p>Based in the UK</p>
        <div className="flex flex-row justify-center space-x-5">
          {links.map((link, index) => (
            <div
              key={index}
              className="border border-x border-purple-200 text-purple-200 flex itemx-center justify-center cursor-pointer hover:scale-105 transition-transform"
            >
              {link.icon}
            </div>
          ))}
        </div>
        <div className="cursor-pointer w-full text-center bg-gradient-to-r from-pink-200 via-purple-300 to-purple-400">
          Hire me!
        </div>
      </div>
    </section>
  );
}

export default Banner;
