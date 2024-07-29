import React from 'react'
import html from "../assets/images/html.svg";
import scss from "../assets/images/scss.svg";
import js from "../assets/images/js.svg";
import react from "../assets/images/react.svg";
import vite from "../assets/images/vite.svg";
import css from "../assets/images/css.svg";
import { useTranslation } from 'react-i18next';

const Skills = () => {
    const {t} = useTranslation()
  return (
    <>
        <div id='skills' className="skills">
            <div className="skills__wrap container">
                <h1 className="skills__wrap-title">{t("skills")}</h1>
                <div className="skills__wrap-cards">
                    <div className="skills__wrap-cards-card">
                        <p>{t("htmlText")}</p>
                        <div className="skills__wrap-cards-card-title">
                            <h3>html5</h3>
                            <img src={html} alt="" />
                        </div>
                    </div>
                    <div className="skills__wrap-cards-card css">
                        <p>{t("cssText")}</p>
                        <div className="skills__wrap-cards-card-title">
                            <h3>CSS</h3>
                            <img src={css} alt="" />
                        </div>
                    </div>
                    <div className="skills__wrap-cards-card">
                        <p>{t("scssText")}</p>
                        <div className="skills__wrap-cards-card-title">
                            <h3>SCSS</h3>
                            <img src={scss} alt="" />
                        </div>
                    </div>
                    <div className="skills__wrap-cards-card">
                        <p>{t("javaScriptText")}</p>
                        <div className="skills__wrap-cards-card-title">
                            <h3>JavaScript</h3>
                            <img src={js} alt="" />
                        </div>
                    </div>
                    <div className="skills__wrap-cards-card">
                        <p>{t("reactText")}</p>
                        <div className="skills__wrap-cards-card-title">
                            <h3>React</h3>
                            <img src={react} alt="" />
                        </div>
                    </div>
                    <div className="skills__wrap-cards-card">
                        <p>{t("viteText")}</p>
                        <div className="skills__wrap-cards-card-title">
                            <h3>Vite</h3>
                            <img src={vite} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Skills