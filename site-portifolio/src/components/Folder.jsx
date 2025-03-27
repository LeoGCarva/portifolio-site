/* eslint-disable react/prop-types */
import { IoIosArrowDown } from "react-icons/io";
import style from "./css/Folder.module.css";
import { LuFileJson, LuFolder } from "react-icons/lu";

export function Folder({ name }) {
  return (
    <>
      <div className={style.folder}>
        <input
          type="checkbox"
          id="checkboxFolder1"
          className={style.checkboxFolder1}
        />
        <label htmlFor="checkboxFolder1" className={style.folderName}>
          <IoIosArrowDown
            className={style.arrowFolder1}
            color="rgba(255, 255, 255, 0.75)"
          />
          <LuFolder size={13} color="rgba(255, 255, 255, 0.75)" />
          {name}
        </label>
        <div className={style.content}>
          <span className={style.fileName}>
            <LuFileJson size={15} />
            <p>project-yakult.json</p>
          </span>
        </div>
      </div>
    </>
  );
}
