import { NextPage } from "next";
import React from "react";

const except: NextPage = () => {
  return (
    <div className="flex flex-col justify-around items-center w-full h-full">
      <div className="text-4xl text-center">
        このページはスマートフォン用です
        <br />
        スマートフォンでもう一度アクセスしてください
      </div>

      <div className="w-[200px] h-[200px] rounded-full bg-sky-500"></div>
    </div>
  );
};

export default except;
