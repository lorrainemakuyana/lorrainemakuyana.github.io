"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import ProfileImage from "~/lorraine.png";

function Header() {
  const buttons = [
    { name: "About", href: "#about", id: "about" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Technologies", href: "#technologies", id: "technologies" },
    { name: "Contact", href: "#contact", id: "contact" },
    { name: "Let's Talk", href: "#", id: "contact" },
  ];

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = buttons.map((button) =>
        document.getElementById(button.id),
      );
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        if (
          section &&
          section.scrollTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [buttons]);

  return (
    <div className="fixed left-0 top-0 z-50 w-full backdrop-blur">
      <div className="flex flex-row items-center justify-center space-x-5 bg-black py-6">
        <Image
          src={ProfileImage}
          alt="Profile Image"
          width={200}
          height={200}
          className="h-20 w-20 rounded-full shadow shadow-gray-400"
        />
        <div>
          <h1 className="font-playfair text-[26px] font-bold tracking-wide text-gray-200">
            Lorraine Makuyana
          </h1>
          <p className="text-md font-raleway">Dynamic Software Engineer</p>
        </div>
      </div>
      <div className="flex justify-center space-x-4 font-playfair">
        {buttons.map((button) => (
          <a
            key={button.name}
            href={button.href}
            id={button.id}
            className={`hover:text-blue hover:border-blue p-2 text-gray-400 ${activeSection === button.href.substring(1) ? "border-b border-gray-400" : ""}`}
          >
            {button.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Header;
