import React from 'react'
import telegram from "../assets/images/telegramIcon.svg";
import instagram from "../assets/images/instagramIcon.svg";
import email from "../assets/images/email.svg"
import discord from "../assets/images/discord.svg"
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const {t} = useTranslation()
  return (
    <>
        <div id='contact' className="contact">
          <div className="contact__wrap container">
            <h1 className="contact__wrap-title">
              {t("contact")}
            </h1>
            <div className="contact__wrap-btns">
              <a href="https://t.me/Abdusamadov_Azamat" target='_blank' className="contact__wrap-btns-btn">
                <p className='contact__wrap-btns-btn-text'>Telegram</p>
                <img className='contact__wrap-btns-btn-img' src={telegram} alt="" />
              </a>
              <a href="https://www.instagram.com/inopreshelenec_17/" target='_blank' className="contact__wrap-btns-btn">
                <p className='contact__wrap-btns-btn-text'>Instagram</p>
                <img className='contact__wrap-btns-btn-img' src={instagram} alt="" />
              </a>
              <a href="mailto:abdusamadovazamat46@gmail.com" target='_blank' className="contact__wrap-btns-btn">
                <p className='contact__wrap-btns-btn-text'>Email</p>
                <img className='contact__wrap-btns-btn-img' src={email} alt="" />
              </a>
              <a href="https://discord.gg/2uZuGwU2" target='_blank' className="contact__wrap-btns-btn">
                <p className='contact__wrap-btns-btn-text'>Discord</p>
                <img className='contact__wrap-btns-btn-img' src={discord} alt="" />
              </a>
            </div>
          </div>
        </div>
    </>
  )
}

export default Contact