"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

import { Background } from "@/components/background/Background";
import { HeroOneButton } from "@/components/hero/HeroOneButton";
import { Section } from "@/components/layout/Section";

import heroBG from "@/images/landing_page/2270009_Futuristic_Meta_1920x1080.svg";
import logo from "@/images/landing_page/logo.svg";
import lightLeft from "@/images/landing_page/Lightleft.svg";
import lightRight from "@/images/landing_page/Lightright.svg";
import { LinkHero, SocialHero, memeList } from "@/utils/hero";
import TextRevealAnimation from "../hero/TextRevealAnimation";
import Navbar from "../navbar/Navbar";

const Hero = () => {
  return (
    <Background color="relative w-full overflow-hidden">
      {/* Background Animations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-[url('/images/landing_page/video.mp4')] bg-cover bg-center relative min-h-screen"
      >
        {/* <Image
          src={heroBG}
          alt="hero-bg"
          width={1000}
          height={1000}
          className="h-full w-full"
        /> */}
        <div className="absolute top-0 left-0 w-full h-full object-cover bg-black/50">
          <video
            src="/images/landing_page/video.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          />
        </div>
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-[-100px] sm:top-[-250px] right-[-25%] sm:right-[-36%] w-full"
        >
          <Image
            src={lightRight}
            alt="light-right"
            width={1000}
            height={1000}
            className="h-full w-[1200px]"
          />
        </motion.div>
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-[-100px] sm:top-[-250px] left-[-100px] sm:left-0 w-full"
        >
          <Image
            src={lightLeft}
            alt="light-left"
            width={1000}
            height={1000}
            className="h-full w-[1200px]"
          />
        </motion.div>
        <div>

        </div>
        <Navbar />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          {/* Hero Section */}
          <Section yPadding="">
            <HeroOneButton
              title={<TextRevealAnimation />}
              description={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="my-6 text-xl font-normal text-[#F0FFF5A3]"
                >
                  Unleash the potential of your digital assets with
                  <br /> a platform designed for the modern trader.
                </motion.div>
              }
              button={
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="rounded-2xl animate-bounce bg-gradient-to-b from-[#5EECFF00] to-[#5EECFF40] p-[6px] backdrop-blur-[4px] inline-block shadow-[1px_1px_2px_0px_#FFFFFF3D_inset,0px_16px_32px_-8px_#F0F1FF52,0px_4px_8px_0px_#F0F1FF1F,0px_2px_6px_0px_#F0F1FF3D,0px_1px_3px_0px_#F0F1FF3D]"
                >
                  <button className="px-4 py-2 rounded-xl bg-[#28FF21] bg-gradient-to-br from-[#F0F1FF00] to-[#F0F1FF3D]">
                    <span className="text-[#0B0B0B] font-bold font-ppneubit text-3xl">
                      Discover Now
                    </span>
                  </button>
                </motion.div>
              }
              subtitle={
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="mb-6 flex items-center justify-center"
                >
                  <div className="rounded-full bg-gradient-to-b from-white/[0.24] to-white/[0.64] p-[2px] backdrop-blur-[4px]">
                    <div className="flex w-fit items-center gap-2 rounded-full bg-black/70 px-3 py-1">
                      <div className="size-2 flex-none rounded-full bg-gradient-to-br from-[#FCFEFE] to-[#CBD1D6] shadow-[0_0_8px_4px_rgba(255,255,255,0.25)]"></div>
                      <span className="bg-gradient-to-br from-white to-[#999999] bg-clip-text text-base font-medium leading-[22px] tracking-[-0.02em] text-transparent drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]">
                        Get early access
                      </span>
                    </div>
                  </div>
                </motion.div>
              }
            />
          </Section>

          {/* Marquee Section */}
        </div>
        <div className="absolute bottom-20 left-0">
          {/* <div className="bg-gradient-black absolute top-[30px] left-0 w-[45%] h-[62px] rounded-full"></div> */}
          {/* <div className="bg-gradient-black absolute top-[30px] right-0 w-[45%] h-[62px] rounded-full"></div> */}
          <Marquee className="">
            {memeList.map((item) => (
              <motion.div
                whileHover={{ scale: 1.2 }}
                key={item.id}
                className="mx-5"
              >
                <Image
                  src={item.image}
                  alt="meme"
                  width={100}
                  height={100}
                  className="w-[60px]"
                />
              </motion.div>
            ))}
          </Marquee>
        </div>
      </motion.div>
    </Background>
  );
};

export default Hero;
