import React, { useState } from 'react'
import profile2 from "../assets/images/profile2.png"
import location from "../assets/images/location.svg"
import call from "../assets/images/call.svg"
import age from "../assets/images/age.svg"
import { useTranslation } from 'react-i18next';
import language from "../assets/images/language.svg"
import Modal from './Modal';

const Header = () => {
    const { t } = useTranslation()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const toggle = ()=>{
        setIsModalOpen(!isModalOpen)
    }
  return (
    <>
    <span id='home'></span>
        <div className="header">
            <div className="header__wrap container">
                <div className="header__wrap-profile">
                    <p><span>{t("logoTitle1")}</span>{t("logoTitle2")}</p>
                </div>
                <ul className="header__wrap-nav">
                    <li className="header__wrap-nav-btn-item">
                        <a href='#home'>{t("home")}</a>
                        <span></span>
                    </li>
                    <li className="header__wrap-nav-btn-item">
                        <a href='#aboutMe'>{t("aboutMe")}</a>
                        <span></span>
                    </li>
                    <li className="header__wrap-nav-btn-item">
                        <a href='#skills'>{t("skills")}</a>
                        <span></span>
                    </li>
                    <li className="header__wrap-nav-btn-item">
                        <a href='#works'>{t("works")}</a>
                        <span></span>
                    </li>
                    <li className="header__wrap-nav-btn-item">
                        <a href='#contact'>{t("contact")}</a>
                        <span></span>
                    </li>
                    
                    <button onClick={()=>{toggle()}} className='header__wrap-nav-langBtn'><img src={language} alt="" /></button>
                    {isModalOpen && <Modal setIsModalOpen={setIsModalOpen}/>}
                </ul>
            </div>
        </div>
        <div className="banner">
            <div className="banner__wrap container">
            <span className='circle'></span>
            <span className='circle2'></span>
                <div className="banner__wrap-card">
                    <div className="banner__wrap-card-top">
                        <img src={profile2} alt="" />
                        <h3>{t("titleSpan")}</h3>
                        <p>{t("title3")}</p>
                    </div>
                    <div className="banner__wrap-card-bottom">
                        <div className="banner__wrap-card-bottom-info">
                            <div className="banner__wrap-card-bottom-info-item">
                                <img src={call} alt="" />
                                <p>+998(94)618-12-95</p>
                            </div>
                            <div className="banner__wrap-card-bottom-info-item">
                                <img src={age} alt="" />
                                <p>{t("age")}</p>
                            </div>
                            <div className="banner__wrap-card-bottom-info-item">
                                <img src={location} alt="" />
                                <p>{t("location")}</p>
                            </div>
                        </div>
                        <div className="banner__wrap-card-bottom-skils">
                            <p>HTML5</p>
                            <p>SCSS</p>
                            <p>JS</p>
                            <p>REACT</p>
                        </div>
                    </div>
                </div>
                <div className="banner__wrap-desc">
                    <h1 id='Hi' className="banner__wrap-desc-title">
                        {t("title1")}
                    </h1>
                    <h1 className="banner__wrap-desc-title">
                        {t("title2")}<span>{t("titleSpan")}</span>,
                    </h1>
                    <h1 className="banner__wrap-desc-title">
                        {t("title3")}
                    </h1>
                    <p className='banner__wrap-desc-text'>
                        {t("bannerText")}
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header