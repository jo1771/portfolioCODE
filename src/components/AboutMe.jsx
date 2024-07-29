import React from 'react'
import profile3 from "../assets/images/profile3.png"
import { useTranslation } from 'react-i18next'

const AboutMe = () => {
    const {t} = useTranslation()
  return (
    <>
        <div id='aboutMe' className="aboutMe">
            <div className="aboutMe__wrap container">
                <div className="aboutMe__wrap-desc">
                    <h1 className="aboutMe__wrap-desc-title">
                        {t("aboutMe")}
                    </h1>
                    <div className="aboutMe__wrap-desc-title-text">
                        <h2>{t("hello")}👋 </h2>
                        <div className='aboutMe__wrap-desc-title-text-item'>
                            <p><span>{t("aboutMeTitle1")}</span>{t("aboutMeText1")}</p>

                            <p><span>{t("aboutMeTitle2")}</span>{t("aboutMeText2")}</p>

                            <p><span>{t("aboutMeTitle3")}</span>{t("aboutMeText3")}</p>
                        </div>
                    </div>
                </div>
                <img src={profile3} alt="" />
            </div>
        </div>
    </>
  )
}

export default AboutMe