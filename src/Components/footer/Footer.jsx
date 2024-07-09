import React from 'react'
import '../footer/Footer.css'
import rasm5 from '../../assets/video.png'

function Footer() {
    return (
        <div className='footer'>
            <div className="footer-container">
                <h1 className="footer-h1">О компании LEANGROUP</h1>
                <div className="footer-item">
                    <img src={rasm5} className="footer-img" />
                    <li className="footer-link">
                        <p className="footer-p">Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году и на сегодняшний день является ведущей компанией по производству ламинатных и экструзионных туб.</p>

                        <p className="footer-p">Имея две технологии – для производства ламинатных и экструзионных туб, мы предлагаем вам широкий спектр возможностей. Большим преимуществом является собственный печатный цех в ламинате и in-line печать в экструзии с возможностью различных дополнительных опций декора. Особое внимание уделяется работе с поставщиками для контроля и поддержания качества производимой нами продукции.</p>

                        <p className="footer-p">С января 2018 года компания стала членом Европейской Ассоциации производителей туб (ETMA), что подтверждает сильную позицию бренда и на рынке Европы. </p>

                    </li>
                </div>
            </div>
        </div>
    )
}
export default Footer
