/* eslint-disable react/prop-types */
import { LuFileJson } from "react-icons/lu";
import { VscChromeClose, VscPlay, VscSplitHorizontal } from "react-icons/vsc";

import style from "./css/Header.module.css";
import { BsThreeDots } from "react-icons/bs";

export function Header({ name }) {
  return (
    <div className={style.mainAreaHeader}>
      <div className={style.contentHeader}>
        <LuFileJson size={15} color="var(--green-json)"/>
        <p>{name}</p>
        {/* <VscChromeClose className={style.closeBtn} size={15}/> */}
      </div>
      <div className={style.icons}>
        <VscPlay />
        <VscSplitHorizontal />
        <BsThreeDots />
      </div>
    </div>
  );
}
