import { NextPage } from "next";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import pcImg from "../public/pc.png";
import phoneImg from "../public/phone.png";
import driveImg from "../public/drive.png";
import docuImg from "../public/document.png";

const Desc: NextPage = () => {
  const [isSoshi, setIsSoshi] = useState(false);
  const [deviceCon, setDeviceCon] = useState<React.CSSProperties>({
    transform: "translate(-50%, -10%)",
    opacity: 0,
  });
  const [docuCon, setDocuCon] = useState<React.CSSProperties>({
    transform: "translate(-50%, -10%)",
    opacity: 0,
  });
  const [driveCon, setDriveCon] = useState<React.CSSProperties>({
    transform: "translate(-50%, -10%)",
    opacity: 0,
  });
  const [soshiCon, setSoshiCon] = useState<React.CSSProperties>({
    transform: "translate(-10%, -50%)",
    opacity: 0,
  });
  const [lineCon, setLineCon] = useState<React.CSSProperties>({
    translate: "translate(-50%, 0)",
    opacity: 0,
  });
  const [messageCon, setMessageCon] = useState("bottom-[-200px]");
  const [descCon, setDescCon] = useState({
    0: "translate-y-[50%]",
    1: "translate-y-[200px]",
    2: "translate-y-[200px]",
    3: "translate-y-[200px]",
  });

  const getScroll = () => {
    const scrolly = window.scrollY;

    const viewHeight = window.innerHeight;

    if (scrolly > 700) setIsSoshi(true);
    else setIsSoshi(false);

    switch (true) {
      case scrolly < 1000:
        setDeviceCon({ transform: "translate(-50%, -10%)", opacity: 0 });
        setDocuCon({ transform: "translate(-50%, -10%)", opacity: 0 });

        setDescCon((prevState) => {
          prevState[0] = "translate-y-[50%]";
          prevState[1] = "translate-y-[200px]";
          return prevState;
        });
        break;

      case scrolly < 1200:
        setDeviceCon({ transform: "translate(-50%, -50%)" });
        setDocuCon({ transform: "translate(-50%,-50%)" });
        setDriveCon({ transform: "translate(-50%, -10%)", opacity: 0 });

        setDescCon((prevState) => {
          prevState[0] = "translate-y-[-200px]";
          prevState[1] = "translate-y-[50%]";
          prevState[2] = "translate-y-[200px]";
          return prevState;
        });
        break;

      case scrolly < 1400:
        setDeviceCon({ transform: `translate(-50%, -${viewHeight * 0.3}px)` });
        setDocuCon({
          transform: `translate(-50%, -${viewHeight * 0.3 - 10}px)`,
        });
        setDriveCon({ transform: "translate(-50%, -50%)" });

        break;

      case scrolly < 1600:
        setDeviceCon({ transform: `translate(-50%, -${viewHeight * 0.3}px)` });
        setDocuCon({ transform: "translate(-20%, calc(-50% - 30px))" });
        setDriveCon({ transform: "translate(-50%, -50%)" });
        setSoshiCon({ transform: "translate(-10%, -50%)", opacity: 0 });
        setLineCon({ translate: "translate(-50%, 0)", opacity: 0 });

        setDescCon((prevState) => {
          prevState[1] = "translate-y-[-200px]";
          prevState[2] = "translate-y-[50%]";
          prevState[3] = "translate-y-[200px]";
          return prevState;
        });
        break;

      case scrolly < 1800:
        setDeviceCon({
          transform: `translate(-50%, -${viewHeight * 0.8}px)`,
          opacity: 0,
        });
        setDocuCon({
          transform: `translate(-20%, -${viewHeight * 0.3 + 30}px)`,
        });
        setDriveCon({ transform: `translate(-50%, -${viewHeight * 0.3}px)` });
        setSoshiCon({
          transform: `translate(-10%, -${viewHeight * 0.3 - 40}px)`,
        });
        setLineCon({ transform: `translate(-50%, -${viewHeight * 0.1}px)` });

        setMessageCon("bottom-[-200px]");
        break;

      case scrolly < 2000:
        setSoshiCon({ transform: "translate(-10%, -10px)", opacity: 0 });
        setLineCon({ transform: `translate(-50%, -${viewHeight * 0.1}px)` });
        setDocuCon({
          transform: `translate(-20%, -${viewHeight * 0.3 + 30}px)`,
        });
        setDriveCon({ transform: `translate(-50%, -${viewHeight * 0.3}px)` });

        setMessageCon("bottom-2");
        setDescCon((prevState) => {
          prevState[2] = "translate-y-[-200px]";
          prevState[3] = "translate-y-[50%]";
          return prevState;
        });
        break;

      default:
        setDocuCon({
          transform: `translate(-20%, -${viewHeight * 0.4}px)`,
          opacity: 0,
        });
        setDriveCon({
          transform: `translate(-50%, -${viewHeight * 0.4}px)`,
          opacity: 0,
        });
        setLineCon({
          transform: `translate(-50%, -${viewHeight * 0.2}px)`,
          opacity: 0,
        });

        setMessageCon("bottom-4 opacity-0");
        setIsSoshi(false);
        setDescCon((prevState) => {
          prevState[0] = "translate-y-[-200px]";
          prevState[1] = "translate-y-[-200px]";
          prevState[2] = "translate-y-[-200px]";
          prevState[3] = "translate-y-[50%]";
          return prevState;
        });
        break;
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", getScroll);

    return () => document.removeEventListener("scroll", getScroll);
  }, []);

  return (
    <div className="w-full h-[1400px] relative">
      <div
        className={`fixed left-1/2 top-1/2 translate-x-[-50%]  h-16 flex flex-row justify-around w-[240px] duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]`}
        style={deviceCon}
      >
        <div className="h-16 w-16 relative">
          <Image
            src={pcImg}
            alt="your computer img"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="h-16 w-16 relative">
          <Image
            src={phoneImg}
            alt="your phone img"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>

      <div
        className={`h-12 w-12 fixed left-1/2 top-1/2 translate-x-[-50%] duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]`}
        style={docuCon}
      >
        <Image
          src={docuImg}
          alt="uploading data"
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div
        className={`fixed left-1/2 top-1/2 translate-x-[-50%] w-16 h-16 duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]`}
        style={driveCon}
      >
        <Image
          src={driveImg}
          alt="Botchi drive img"
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div
        className={`w-10 h-10 bg-sky-500 rounded-full fixed top-1/2 left-1/2 translate-x-[-20%] duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]`}
        style={soshiCon}
      />

      <div
        className={`w-11/12 h-[300px] bg-slate-200 rounded fixed top-1/2 left-1/2 translate-x-[-50%] duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]`}
        style={lineCon}
      >
        <div className="relative w-full h-full overflow-hidden">
          <div className="p-2">
            <span>＜　ぼっちみんなで協力するぞい！</span>
          </div>
          <div
            className={`flex flex-row absolute left-1/2 translate-x-[-50%] w-11/12 duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${messageCon}`}
          >
            <div className="w-10 h-8 bg-sky-500 rounded-full mr-2 " />

            <div className="rounded bg-white grow p-1 text-sm">
              新しいファイルがGoogle Driveにアップロードされたのだ！
              <br />
              <br />
              ====追加されたファイル====
              <br />
              乾燥剤学　シケタイ
              <br />
              <span className="text-blue-700 underline">https://~~~~</span>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`flex fixed left-1/2 translate-x-[-50%] w-11/12 duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          isSoshi ? "bottom-4" : "bottom-[-200px]"
        }`}
      >
        <div className="rounded-full bg-sky-500 w-12 h-12 mr-2" />
        <div className="rounded bg-slate-200 h-24 grow relative overflow-hidden">
          <div
            className={`absolute bottom-1/2 left-1/2 translate-x-[-50%] w-11/12 text-center duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${descCon[0]}`}
          >
            それじゃあ説明を始めるのだ
          </div>
          <div
            className={`absolute bottom-1/2 left-1/2 translate-x-[-50%] translate-y-[50%] w-11/12 text-center duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${descCon[1]}`}
          >
            自分のデバイスに「乾燥剤学　シケタイ」というデータがあるとするのだ
          </div>
          <div
            className={`absolute bottom-1/2 left-1/2 translate-x-[-50%] translate-y-[50%] w-11/12 text-center duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${descCon[2]}`}
          >
            そのデータをぼっち会ドライブにアップロードすると…
          </div>
          <div
            className={`absolute bottom-1/2 left-1/2 translate-x-[-50%] translate-y-[50%] w-11/12 text-center duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${descCon[3]}`}
          >
            ぼくがぼっち会ドライブを定期的にチェックしてぼっち会グループに自動的に通知するのだ！
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desc;
