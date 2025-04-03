import { codeToHtml } from "shiki";
import { Header } from "../components/Header";

import style from "./css/ProjectYakult.module.css";

const demoCode = `{
  "name": "project-yakult",
  "version": "0.0.1",

  "description": {
    "summary": "This is a website that simulates a sell and buy of a distributor, ]in this case, Yakult distributor.",
    "howToUse": "First, pick a seller. Than the products. That its now you have a receipt of your purchased!",
    "languages": "JavaScript, Css + Html"
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

export function ProjectYakult() {
  return (
    <>
      <Header name={'project.yakult.json'}/>
      <div className={style.projectContainer}>
        <div className={style.lineCount}>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
          <p>11</p>
          <p>12</p>
          <p>13</p>
          <p>14</p>
          <p>15</p>
          <p>16</p>
        </div>
        <div
          className={style.contentDiv}
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
      </div>
    </>
  );
}
