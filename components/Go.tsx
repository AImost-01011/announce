import { NextPage } from "next";
import React from "react";
import Image from "next/image";
import driveImg from "../public/drive.png";
import Link from "next/link";

const Go: NextPage = () => {
  return (
    <div className="m-4 flex flex-col items-center">
      <div className="text-lg">
        使い方はわかったのだ？
        <br />
        それじゃあ一回試しにファイルをアップロードして通知されるかチェックしてみるのだ！
      </div>

      <Link
        href={`https://drive.google.com/drive/u/0/folders/1f93l6069txDbTD2Sx3k8XfWif8zpnN5d`}
        passHref={true}
      >
        <div className="w-16 h-16 my-4 drop-shadow-lg active:drop-shadow-none ">
          <Image src={driveImg} alt="drive icon" />
        </div>
      </Link>

      <div className="text-sm animate-pulse">
        上のアイコンをタップするのだ！
      </div>

      <div>
        <br />
        <span className="text-xs">Special Thanks: ゆうき(イラスト)</span>
      </div>
    </div>
  );
};

export default Go;
