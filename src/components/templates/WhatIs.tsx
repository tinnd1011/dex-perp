"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Background } from "@/components/background/Background";
import { HeroOneButton } from "@/components/hero/HeroOneButton";
import { Section } from "@/components/layout/Section";
import bgContent from "@/images/landing_page/content.svg";
import logoWhatIs from "@/images/landing_page/logoWhatIs.svg";
import chart from "@/images/landing_page/chart.svg";
import swap from "@/images/landing_page/Swap Content.svg";
import lineleft from "@/images/landing_page/lineleft1.svg";
import lineright from "@/images/landing_page/lineright2.svg";
import imgChartSwap from "@/images/landing_page/mobilewhatis.svg";
import { WhatIsList, WhatIsListMobile } from "@/utils/whatis";
const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const slideIn = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const WhatIs = () => {
  return (
    <Background color="w-full h-full sm:min-h-screen py-[10px] sm:py-[40px] bg-black bg-[url('/images/landing_page/content.svg')] bg-no-repeat bg-cover bg-center">
      <div className="w-full h-[207px] sm:min-h-screen relative ">
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <Section yPadding="h-full relative">
            <div className="h-full">
              <div className="flex flex-col items-center justify-center h-full gap-1 sm:gap-8">
                <Image
                  src={logoWhatIs}
                  alt="logo"
                  width={500}
                  height={500}
                  className="w-[100px] sm:w-[250px] h-[100px] sm:h-[250px]"
                />
                <HeroOneButton
                  title={
                    <>
                      <span className="uppercase text-[#F0FFF5] text-shadow-multi backdrop-blur-xl font-ppneubit text-2xl sm:text-[84px] font-bold">
                        What Is Traxos
                      </span>
                    </>
                  }
                  description={
                    <div className="my-0 sm:my-6 text-xs sm:text-2xl font-normal text-white">
                      A platform where you can buy more tokens <br /> with
                      leverage on existing DEXes
                    </div>
                  }
                />
              </div>
            </div>
            {WhatIsList.map((item) => (
              <motion.div
                key={item.id}
                style={{
                  top: item.top,
                  left: item.left,
                }}
                className={`hidden sm:flex px-3 py-2 absolute items-center gap-3 bg-white/5 shadow-[0_0_4px_-1px_rgba(2,29,13,0.12),inset_0_-4px_8px_-2px_rgba(255,255,255,0.37)] backdrop-blur-[10px] rounded-full`}
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                viewport={{ once: true }}
              >
                <Image
                  src={item.icon}
                  alt="rocket"
                  width={50}
                  height={50}
                  className="w-[32px] h-[32px]"
                />
                <span className="text-[#F7FDFD] text-sm">{item.title}</span>
              </motion.div>
            ))}
          </Section>
        </motion.div>
        {WhatIsListMobile.map((item) => (
          <motion.div
            key={item.id}
            style={{
              top: item.top,
              left: item.left,
            }}
            className={`flex md:hidden px-[5px] py-[3px] absolute items-center gap-[5px] bg-white/5 shadow-[0_0_4px_-1px_rgba(2,29,13,0.12),inset_0_-4px_8px_-2px_rgba(255,255,255,0.37)] backdrop-blur-[10px] rounded-full`}
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <Image
              src={item.icon}
              alt="rocket"
              width={50}
              height={50}
              className="w-[7px] h-[7px]"
            />
            <span className="text-[#F7FDFD] text-[6px]">{item.title}</span>
          </motion.div>
        ))}
      </div>

      <Section yPadding="p-0">
        <div className=" grid-cols-7 min-h-[500px] gap-10 hidden md:grid">
          <motion.div
            className="col-span-4 flex flex-col gap-6"
            initial="hidden"
            whileInView="visible"
            variants={slideIn}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <div>
              <Image
                src={chart}
                alt="chart"
                width={1000}
                height={1000}
                className="w-full h-full"
              />
            </div>
            <div className="py-3 px-4 bg-white/5 rounded-lg relative">
              <div className="absolute top-1/2 -translate-y-1/2 left-4">
                <Image
                  src={lineleft}
                  alt="line"
                  width={100}
                  height={100}
                  className="w-full h-full"
                />
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-4">
                <Image
                  src={lineright}
                  alt="line"
                  width={100}
                  height={100}
                  className="w-full h-full"
                />
              </div>
              <p className="font-normal text-lg text-center leading-6 text-[#F0FFF5]">
                The widest range of trading collateral and the highest LTVs
              </p>
            </div>
          </motion.div>
          <motion.div
            className="col-span-3 h-full"
            initial="hidden"
            whileInView="visible"
            variants={slideIn}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <div className="w-full h-full">
              <Image
                src={swap}
                alt="swap"
                width={1000}
                height={1000}
                className="w-fit h-full"
              />
            </div>
          </motion.div>
        </div>
        <div className="block md:hidden">
          <div className="mb-4">
            <Image
              src={imgChartSwap}
              alt="chart swap"
              width={1000}
              height={1000}
              className="w-full h-full"
            />
          </div>
          <div className="py-3 px-4 bg-white/5 rounded-lg relative">
            <div className="absolute top-1/2 -translate-y-1/2 left-4">
              <Image
                src={lineleft}
                alt="line"
                width={100}
                height={100}
                className="w-full h-full"
              />
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-4">
              <Image
                src={lineright}
                alt="line"
                width={100}
                height={100}
                className="w-full h-full"
              />
            </div>
            <p className="font-normal max-w-[200px] mx-auto text-lg text-center leading-6 text-[#F0FFF5]">
              The widest range of trading collateral and the highest LTVs
            </p>
          </div>
        </div>
      </Section>
    </Background>
  );
};

export default WhatIs;
