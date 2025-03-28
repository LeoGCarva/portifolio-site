/* eslint-disable react/prop-types */
import { LuFileJson } from "react-icons/lu";
import style from './css/Project.module.css'

export function Project({ projectName }) {
  return (
    <>
      <span className={style.fileName}>
        <LuFileJson size={15} />
        <p>{projectName}</p>
      </span>
    </>
  );
}
