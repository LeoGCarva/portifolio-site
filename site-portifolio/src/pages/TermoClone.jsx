import { Header } from "../components/Header";
import { codeToHtml } from "shiki";

import style from "./css/ProjectYakult.module.css";

const demoCode = `{
  "name": "Termo-Clone",
  "version": "0.2.1",

  "description": {
    "summary": "This is a clone of a web game called 'Termo', and Termo is a portuguese version of 'Wordle'.",
    "howToUse": {
      "ruleOne": "It's simple, just type a five letter word and submit",
      "ruleTwo": "Letters you got right and in right place are green",
      "ruleThree": "Letters that cointains in the world but are not in the right place are yellow",
      "finalRule": "Letters that are wrong are pearl. You have six guesses",
    },
    "goal": "This was a project to help me understand the useState hook",
    "languages": "React Js, Css + Html"
  },

  "links": {
    "github": "https://github.com/LeoGCarva/projetoYakult",
    "vercel": "https://projeto-yakult.vercel.app/",
  },
}`;

const html = await codeToHtml(demoCode, {
  lang: "json",
  theme: "min-dark",
});

export function TermoClone() {
  const list = [];
  for (let i = 1; i < 23; i++) {
    list.push(i);
  }

  return (
    <>
      <Header name={"project.yakult.json"} />
      <div className={style.projectContainer}>
        <div className={style.lineCount}>
          {list.map((num, index) => (
            <p key={index}>{num}</p>
          ))}
        </div>
        <div
          className={style.contentDiv}
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
      </div>
    </>
  );
}
