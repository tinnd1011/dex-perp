import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiWallet } from "react-icons/ci";
import { GoArrowUpRight } from "react-icons/go";

import { Section } from "../layout/Section";

import logo from "@/images/landing_page/logo.svg";
import logomobile from "@/images/landing_page/logo (1).svg";

import { LinkHero, SocialHero } from "@/utils/hero";
import { Button } from "../ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track if the navbar is open on mobile

  // Toggle function for the hamburger menu
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Section yPadding="py-6">
      {/* Navbar */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed z-50 top-5 left-0 w-full px-1 sm:px-[40px]"
      >
        <div className="grid grid-cols-3 items-center rounded-2xl bg-[linear-gradient(93.78deg,_rgba(17,18,20,0.18)_4.87%,_rgba(12,13,15,0.216)_75.88%)] px-4 py-2 border-[1px] border-[#FFFFFF0F] shadow-[inset_0px_1px_1px_1px_#FFFFFF26] backdrop-blur-[12px]">
          <div className="flex items-center">
            <Image src={logo} alt="logo" />
          </div>
          <div>
            <div className="items-center justify-center gap-x-4 text-base font-light text-[#99A0AE] hidden sm:flex">
              {LinkHero.map((item) => (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  key={item.id}
                  className="flex h-[40px] items-center justify-center"
                >
                  <Link href={item.link} className="px-2 font-medium">
                    {item.title}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <div className="hidden sm:flex items-center justify-end gap-5">
              <div className="flex items-center gap-2">
                {SocialHero.map((item) => (
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    key={item.id}
                    className="flex size-11 items-center justify-center"
                  >
                    <Link href={item.link}>
                      <item.icon className="text-2xl text-white" />
                    </Link>
                  </motion.div>
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-lg bg-white px-4 pb-2 pt-[10px] font-ppneubit text-[22px] font-bold"
              >
                Launch App
              </motion.button>
            </div>
            {/* Hamburger menu for mobile */}
            <div className="flex justify-end sm:hidden">
              <RxHamburgerMenu
                className="text-white text-2xl"
                onClick={toggleNavbar} // Toggle state when clicked
              />
            </div>
          </div>
        </div>

        {/* Mobile Navbar (Toggled Open/Close) */}
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : "100%" }}
          transition={{ duration: 0.5 }}
          className={`fixed top-0 left-0 w-full h-full bg-[#080A06] z-40 sm:hidden`}
        >
          <div className="flex justify-between px-4 py-[18px] bg-black">
            <div className="flex items-center gap-x-[10px]">
              <div className="w-10 h-10 flex items-center justify-center">
                <RxHamburgerMenu
                  className="text-xl text-white"
                  onClick={toggleNavbar} // Close the navbar on click
                />
              </div>
              <Image
                src={logomobile}
                alt="logo mobile"
                width={40}
                height={40}
                className="w-auto h-auto"
              />
            </div>
            <Button className="bg-white shadow-[0px_8px_8px_-4px_rgba(185,191,201,0.5)] hover:bg-white">
              <CiWallet className="text-[#1B1B1B] text-xl" />
              <span className="text-[#1B1B1B]">Connect Wallet</span>
            </Button>
          </div>

          {/* Links */}
          <div className="">
            {LinkHero.map((item) => (
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                key={item.id}
                className="w-full h-[52px] p-4 text-white border-b-[1px] border-[#525866]"
              >
                <Link href={item.link} className="font-medium">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">{item.title}</span>
                    <GoArrowUpRight className="text-white text-2xl" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Social Icons and Button */}
          <div className="px-4 py-8 flex justify-between">
            <div className="flex items-center">
              {SocialHero.map((item) => (
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  key={item.id}
                  className="flex size-11 items-center justify-center"
                >
                  <Link href={item.link}>
                    <item.icon className="text-2xl text-white" />
                  </Link>
                </motion.div>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-lg bg-white px-4 pb-2 pt-[10px] font-ppneubit text-[22px] font-bold"
            >
              Launch App
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Navbar;
