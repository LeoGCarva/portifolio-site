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
  VscRemote,
  VscWarning,
  VscBroadcast,
  VscBell,
} from "react-icons/vsc";
import { BiLogoVisualStudio } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { LuCircleX, LuFolder } from "react-icons/lu";
import { WelcomePage } from "./WelcomePage";
import { Project } from "../components/Project";
import { useState } from "react";

import style from "./css/Home.module.css";
import { ProjectYakult } from "./ProjectYakult";

export function Home() {
  const [pageCount, setPageCount] = useState();

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
              <p>site-portfolio</p>
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
            <div className={style.topIcons}>
              <span>
                <VscFiles className={style.firstIcon} />
              </span>
              <VscSearch className={style.icons} />
              <VscSourceControl className={style.icons} />
              <VscDebugAlt className={style.icons} />
              <VscExtensions className={style.icons} />
            </div>

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
                <IoIosArrowDown color="rgba(255, 255, 255, 0.75)" />
                <p>SITE-PORTFOLIO</p>
              </span>

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
                  <p>Projects</p>
                </label>
                <div className={style.content} onClick={() => setPageCount(<ProjectYakult />)}>
                  <Project projectName={"project-yakult.json"} />
                </div>
              </div>
            </div>
            <div>
              <span className={style.dirTitle}>
                <IoIosArrowForward color="rgba(255, 255, 255, 0.75)" />
                <p>OUTLINE</p>
              </span>
              <span className={style.dirTitle}>
                <IoIosArrowForward color="rgba(255, 255, 255, 0.75)" />
                <p>TIMELINE</p>
              </span>
            </div>
          </div>
        </aside>

        <main className={style.ideArea}>{pageCount === undefined ? <WelcomePage /> : pageCount}</main>

        <footer className={style.footer}>
          <div className={style.footerLeft}>
            <VscRemote className={style.icons} />
            <span>
              <LuCircleX /> <p>0</p>
              <VscWarning /> <p>0</p>
            </span>
          </div>
          <div className={style.footerRight}>
            <VscCopilot className={style.icons} />
            <span>
              <VscBroadcast /> <p>Go Live</p>
            </span>
            <VscBell className={style.icons} />
          </div>
        </footer>
      </div>
    </>
  );
}
