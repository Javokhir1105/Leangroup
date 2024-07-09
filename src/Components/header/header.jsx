import React from 'react'
import '../header/header.css'
import rasm from '../../assets/logo.png'

function Header() {
    return (
        <div className="header">
            <div className='header_container'>
                <img src={rasm} alt="" className="header-img" />
                <ul className="item-one">
                    <li className="item-link"><a href="#" className="header-link">Продукция</a></li>
                    <li className="item-link"><a href="#" className="header-link">Сертификаты</a></li>
                    <li className="item-link"><a href="#" className="header-link">Наша команда</a></li>
                    <li className="item-link"><a href="#" className="header-link">О нас</a></li>
                    <li className="item-link"><a href="#" className="header-link">Новости</a></li>
                    <li className="item-link"><a href="#" className="header-link">Вакансии</a></li>
                    <li className="item-link"><a href="#" className="header-link">Контакты</a></li>
                </ul>
                <ul className="item-two">
                <p className="header-item-p">EN</p>
                <p className="header-item-p">RU</p>
                </ul>
            </div>
        </div>
    )
}
export default Header
