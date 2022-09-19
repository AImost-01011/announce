import { NextPage } from "next";
import React from "react";
import Image from "next/image";
import soshiIcon from "../public/soshiIcon.png";

const except: NextPage = () => {
  return (
    <div className="flex flex-col justify-around items-center w-full h-full">
      <div className="text-4xl text-center">
        このページはスマートフォン用です
        <br />
        スマートフォンでもう一度アクセスしてください
      </div>

      <div className="w-[200px] h-[200px] rounded-full bg-lime-200 relative">
        <Image
          src={soshiIcon}
          alt="soshi icon"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default except;
