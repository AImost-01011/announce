import { NextPage } from "next";
import React from "react";

const Top: NextPage = () => {
  return (
    <div className="flex flex-col items-center w-full h-240">
      <div className="w-11/12 h-[500px] bg-sky-500 my-4">image</div>

      <span className="my-4 text-4xl text-center">
        はじめまして
        <br />
        ぼくはそしまるなのだ
      </span>

      <div className="w-11/12 text-center  my-4">
        ぼくの名前はそしまるというのだ
        <br />
        シャーレの星からやってきたカワウソの妖精なのだ
        <br />
        1年前シャーレに抗菌剤ディスクを入れるべきところに
        <br />
        乾燥剤を入れられて召喚されたらしいんだけどよくわからないのだ…
        <br />
        みんなに大事なお知らせがあるんだけれど
        <br />
        はじめにぼくの自己紹介をするのだ
      </div>

      <table className="w-11/12 my-4">
        <tbody>
          <tr className="border-b-2 border-black border-dashed border-collapse">
            <td className="text-center">名前</td>
            <td className="text-center">そしまる(阻止円)</td>
          </tr>
          <tr className="border-b-2 border-black border-dashed border-collapse">
            <td className="text-center">好きな食べ物</td>
            <td className="text-center">バニラバー</td>
          </tr>
          <tr className="border-b-2 border-black border-dashed border-collapse">
            <td className="text-center">嫌いな食べ物</td>
            <td className="text-center">ピザ</td>
          </tr>
          <tr className="border-b-2 border-black border-dashed border-collapse">
            <td className="text-center">主食</td>
            <td className="text-center">唐揚げ弁当</td>
          </tr>
          <tr className="border-b-2 border-black border-dashed border-collapse">
            <td className="text-center">宝物</td>
            <td className="text-center">
              過去に当てた
              <br />
              バニラバーの棒4ポイント分
            </td>
          </tr>
          <tr className="border-b-2 border-black border-dashed border-collapse">
            <td className="text-center">得意なこと</td>
            <td className="text-center">性ホルモン(?)、ピアノ</td>
          </tr>
          <tr className="border-b-2 border-black border-dashed border-collapse">
            <td className="text-center">苦手なこと</td>
            <td className="text-center">異物巨細胞の同定</td>
          </tr>
          <tr className="border-b-2 border-black border-dashed border-collapse">
            <td className="text-center">愛読書</td>
            <td className="text-center">病見え（まだ見えていない）</td>
          </tr>
        </tbody>
      </table>

      <div className="my-4 w-11/12">
        本日、ぼっち会グループLINEに新機能が追加されたのだ！
        <br />
        今まではぼっち会ドライブに上げたファイルは上げた本人がグループに伝えないと通知できなかったけど
        <br />
        今日からドライブに新しく上がったファイルはみんなに代わってぼくがぼっち会グループに自動的に通知するのだ！
      </div>
    </div>
  );
};

export default Top;
