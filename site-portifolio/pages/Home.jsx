import {
  VscDebugAlt,
  VscExtensions,
  VscFiles,
  VscSearch,
  VscSourceControl,
} from "react-icons/vsc";
import { BiLogoVisualStudio } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import style from "./css/Home.module.css";

export function Home() {
  return (
    <>
      <div className={style.pageContainer}>
        <header className={style.header}>
          <BiLogoVisualStudio color="#23a8f2"/>
        </header>

        <aside className={style.explorerArea}>
          <div className={style.iconsNavbar}>
            <span>
              <VscFiles className={style.firstIcon} />
            </span>
            <VscSearch className={style.icons} />
            <VscSourceControl className={style.icons} />
            <VscDebugAlt className={style.icons} />
            <VscExtensions className={style.icons} />
          </div>
          <div className={style.explorer}>
            <div>
              <span className={style.explorerTitle}>
                <p>EXPLORER</p> <BsThreeDots />
              </span>
              <span className={style.dirTitle}>
                <IoIosArrowDown color="white" />
                <p>SITE-PORTIFOLIO</p>
              </span>
              <p>site-portifolio</p>
            </div>
            <div>
              <span className={style.dirTitle}>
                <IoIosArrowForward color="white" />
                <p>OUTLINE</p>
              </span>
              <span className={style.dirTitle}>
                <IoIosArrowForward color="white" />
                <p>TIMELINE</p>
              </span>
            </div>
          </div>
        </aside>

        <main className={style.ideArea}>teste</main>

        <footer className={style.footer}>conteudo do footer</footer>
      </div>
    </>
  );
}
