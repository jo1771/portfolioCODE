import React from 'react'
import en from "../assets/images/angFlag.png"
import uz from "../assets/images/uzbFlag.png"
import ru from "../assets/images/rusFlag.png"
import { useTranslation } from 'react-i18next';

const Modal = ({setIsModalOpen}) => {
    const { i18n} = useTranslation()
    const changeLangEng = ()=>{
        i18n.changeLanguage("en")
        setIsModalOpen(false)
    }
    const changeLangRus = ()=>{
        i18n.changeLanguage("ru")
        setIsModalOpen(false)
    }
    const changeLangUzb = ()=>{
        i18n.changeLanguage("uz")
        setIsModalOpen(false)
    }
  return (
    <>
        <div className="modal">
            <div className="modal__wrap">
                <div onClick={()=>{changeLangEng()}} className="modal__wrap-lang borderbottom">
                    <p>English</p>
                    <img src={en} alt="" />
                </div>
                <div onClick={()=>{changeLangRus()}} className="modal__wrap-lang borderbottom">
                    <p>Русский</p>
                    <img src={ru} alt="" />
                </div>
                <div onClick={()=>{changeLangUzb()}} className="modal__wrap-lang">
                    <p>Oʻzbekcha</p>
                    <img src={uz} alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Modal