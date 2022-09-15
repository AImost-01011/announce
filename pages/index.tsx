import type { NextPage } from "next";
import React, { useEffect } from "react";
import Router from "next/router";
import Head from "next/head";
import Caution from "../components/Caution";
import Desc from "../components/Desc";
import Go from "../components/Go";
import Top from "../components/Top";

const Home: NextPage = () => {
  useEffect(() => {
    if (
      navigator.userAgent.indexOf("iPhone") > 0 ||
      (navigator.userAgent.indexOf("Android") > 0 &&
        navigator.userAgent.indexOf("Mobile") > 0)
    ) {
      // スマートフォン向けの記
    } else {
      Router.push("/except");
    }
  }, []);

  return (
    <div>
      <Head>
        <title>はじめまして！そしまるなのだ！</title>
        <meta
          name="description"
          content="ぼくの名前はそしまるというのだ。ぼっち会のグループに新機能を追加するからその説明をするのだ。"
        />
        <meta
          property="og:description"
          content="ぼくの名前はそしまるというのだ。ぼっち会のグループに新機能を追加するからその説明をするのだ。"
        />
        {/* <meta property="og:image" content="ここにLINE共有時のサムネイル用画像のパスを書く" /> */}
      </Head>

      <main>
        <Top />

        <Desc />

        <Caution />

        <Go />
      </main>
    </div>
  );
};

export default Home;
