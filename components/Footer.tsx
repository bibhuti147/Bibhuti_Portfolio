"use client";
import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";
import Link from "next/link";

const Footer = () => {
  const handleMail = () => {
    window.open("mailto:bibhutinayak309@gmail.com", "_blank");
  };
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Contact <span className="text-purple">Me</span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Feel free to Contact me. I look forward to discussing how my skills
          and interests align with your needs.
        </p>
        <MagicButton
          title="Let's get in touch"
          icon={<FaLocationArrow />}
          position="right"
          handleClick={handleMail}
        />
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-xs md:font-normal font-light mb-3 md:mb-0">
          © Copyright 2024 . Made by Bibhuti Bhusan Nayak
        </p>

        <div className="flex items-center md:gap-3 gap-6 ">
          {socialMedia.map((profile) => (
            <Link
              href={profile.link}
              target="_blank"
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-copacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img
                src={profile.img}
                alt={"profile.id"}
                width={20}
                height={20}
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
