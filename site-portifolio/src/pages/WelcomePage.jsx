import { BiLogoVisualStudio } from "react-icons/bi";
import style from './css/WelcomePage.module.css'

export function WelcomePage() {
  return (
    <>
      <div className={style.ideContent}>
        <BiLogoVisualStudio size={400} className={style.vscLogo} />
        <p>Welcome to my portfolio!</p>
        <div className={style.textArea}>
          <div className={style.teste}>
            <p>Name</p>
            <p>Profession</p>
            <p>Email</p>
            <p>Github</p>
            <p>Passions</p>
          </div>
          <div className={style.teste2}>
            <p>
              <code>Leonardo</code>
            </p>
            <p>
              <code>DEV</code> + <code>Front-End</code>
            </p>
            <p>
              <code>leu1.g.carvalho@gmail.com</code>
            </p>
            <p>
              <code>github.com/LeoGCarva</code>
            </p>
            <p>
              <code>code</code> + <code>hobbits</code> + <code>chess</code>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
