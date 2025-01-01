'use client'
import React, { useState } from 'react'

const menu = [
    {
        id: 1,
        title: "Long",
        value: "long",
    },
    {
        id: 2,
        title: "Swap",
        value: "swap",
    },
];

const FormTabTrade = () => {

    const [activeTab, setActiveTab] = useState(menu[0].value);

  return (
      <div className="rounded-full font-satoshi p-[2px] border-solid border-[1px] border-[#FFFFFF0A] backdrop-blur-[4px] bg-[#FFFFFF0A] flex items-center w-fit">
          {menu.map((item) => {
              return (
                  <div
                      key={item.id}
                      onClick={() => setActiveTab(item.value)}
                      className={`px-[24px] py-[10px] text-center text-[16px] leading-[24px] cursor-pointer border-[1px] border-solid border-transparent ${activeTab == item.value
                          ? "text-[#fff] border-[1px] border-solid border-[#FFFFFF14] bg-gradient-to-b from-neutral-600 to-neutral-800 rounded-full  font-bold hover:from-neutral-500 hover:to-neutral-700 shadow-lg transition-colors"
                          : "font-medium text-[#99A0AE]"
                          }`}
                  >
                      {item.title}
                  </div>
              );
          })}
      </div>
  )
}

export default FormTabTrade