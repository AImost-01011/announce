import { NextPage } from "next";
import React from "react";

const Caution: NextPage = () => {
  return (
    <div>
      <div className="text-center text-orange-600 text-4xl my-4 font-bold">
        利用上の注意
      </div>

      <div className="mx-4 text-lg">
        ぼっち会グループに新機能を追加するにあたり注意してもらうことがあります。
      </div>

      <ul className="m-4 text-lg list-disc list-inside">
        <li className="my-1">
          そしまるのチェックは10分に1回行われるためアップロードされたファイルがリアルタイムで通知されるわけではありません。
        </li>
        <li className="my-1">通知されるのはファイルのアップロードのみです。</li>
        <li className="my-1">
          すでにドライブ上に存在するファイルを編集しても通知は行われません。
        </li>
        <li className="my-1">
          すでにドライブ上に存在するファイルを削除してからアップロードすると通知されます。
        </li>
        <li className="my-1">
          アップロードの通知を停止することはできません。(LINEで通知拒否することはできます)
        </li>
        <li className="my-1">
          一度に複数ファイルをアップロードするとリスト形式で通知が行われます。
        </li>
        <li className="my-1">
          一度通知が入るとその通知を消去することはできません。
        </li>
        <li className="my-1 text-orange-600">
          一度ファイルをアップロードし通知された場合、ファイルを削除しても通知URLからそのファイルにアクセスすることができます。削除したいファイルがある場合、一度ファイルを削除したあと、Google
          Drive内のゴミ箱から完全消去することでアクセスできなくなります。
        </li>
      </ul>
    </div>
  );
};

export default Caution;
