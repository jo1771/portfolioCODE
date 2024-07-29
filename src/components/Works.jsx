import React from 'react'
import zoneGif from "../assets/images/Zone.gif";
import blueColar from "../assets/images/blueColar.gif";
import nike from "../assets/images/nike.gif";
import cryp from "../assets/images/cryp.gif";
import { useTranslation } from 'react-i18next';

const Works = () => {
  const { t } = useTranslation()
  return (
    <>
      <div id='works' className="works">
        <div className="works__wrap container">
          <h1 className="works__wrap-title">
            {t("works")}
          </h1>
          <div className="works__wrap-desc">
            <div className="works__wrap-desc-item">
              <img src={zoneGif} alt="" />
              <p className='works__wrap-desc-item-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime provident dolorum magnam sint obcaecati odio ullam eum temporibus distinctio. Repellendus magnam praesentium corporis eum temporibus culpa incidunt. Nesciunt esse eligendi consequuntur nostrum quam, laboriosam aperiam! Magnam, ipsam</p>
            </div>
            <div className="works__wrap-desc-item">
              <p className='works__wrap-desc-item-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime provident dolorum magnam sint obcaecati odio ullam eum temporibus distinctio. Repellendus magnam praesentium corporis eum temporibus culpa incidunt. Nesciunt esse eligendi consequuntur nostrum quam, laboriosam aperiam! Magnam, ipsam</p>
              <img src={nike} alt="" />
            </div>
            <div className="works__wrap-desc-item">
              <img src={blueColar} alt="" />
              <p className='works__wrap-desc-item-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime provident dolorum magnam sint obcaecati odio ullam eum temporibus distinctio. Repellendus magnam praesentium corporis eum temporibus culpa incidunt. Nesciunt esse eligendi consequuntur nostrum quam, laboriosam aperiam! Magnam, ipsam</p>
            </div>
            <div className="works__wrap-desc-item">
              <p className='works__wrap-desc-item-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime provident dolorum magnam sint obcaecati odio ullam eum temporibus distinctio. Repellendus magnam praesentium corporis eum temporibus culpa incidunt. Nesciunt esse eligendi consequuntur nostrum quam, laboriosam aperiam! Magnam, ipsam</p>
              <img src={cryp} alt="" />
            </div>
          </div>
          <p className='works__wrap-text'>{t("worksText")}<a target='_blank' href="https://github.com/jo1771?tab=repositories?azz">GitHub</a></p>
          <span className='works__wrap-circle-white'></span>
        </div>
      </div>
    </>
  )
}

export default Works