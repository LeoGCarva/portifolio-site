import {
  VscDebugAlt,
  VscExtensions,
  VscFiles,
  VscSearch,
  VscSourceControl,
  VscLayout,
  VscLayoutSidebarLeft,
  VscLayoutPanelOff,
  VscLayoutSidebarRightOff,
  VscChromeMinimize,
  VscChromeMaximize,
  VscChromeClose,
  VscArrowLeft,
  VscArrowRight,
  VscCopilot,
  VscAccount,
  VscGear,
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
          <span className={style.headerPart1}>
            <BiLogoVisualStudio color="#23a8f2" fontSize="1.3rem" />
            <p>File</p>
            <p>Edit</p>
            <p>Selection</p>
            <p>View</p>
            <p>Go</p>
            <p>Run</p>
            <p>Terminal</p>
            <p>Help</p>
          </span>

          <span className={style.headerPart2}>
            <VscArrowLeft />
            <VscArrowRight />
            <span>
              <VscSearch />
              <p>site-portifolio</p>
            </span>
            <VscCopilot />
          </span>

          <span className={style.headerPart3}>
            <VscLayout />
            <VscLayoutSidebarLeft />
            <VscLayoutPanelOff />
            <VscLayoutSidebarRightOff />
            <VscChromeMinimize className={style.specialBtns} />
            <VscChromeMaximize className={style.specialBtns} />
            <VscChromeClose className={style.specialBtns} />
          </span>
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
            <div className={style.bottomIcons}>
              <a href="https://github.com/LeoGCarva">
                <VscAccount className={style.icons} />
              </a>
              <VscGear className={style.icons} />
            </div>
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
