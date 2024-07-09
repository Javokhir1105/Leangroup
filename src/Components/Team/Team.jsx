import React from 'react'
import '../Team/Team.css'
import rasm16 from '../../assets/Mask group.png'
import rasm17 from '../../assets/Mask group (1).png'
import rasm18 from '../../assets/Mask group (2).png'
import rasm19 from '../../assets/Mask group (3).png'
import rasm20 from '../../assets/Mask group (4).png'

 function Team() {
  return (
    <div className='Team'>
      <div className="team-container">
        <h1 className="team-h1" >Наша команда</h1>
        <div className="team-part">
            <ul className="team-item">
                <img src={rasm16} alt="" className="team-img" />
                <h3 className="team-h3">Войнич Дарья</h3>
                <p className="team-p">Заместитель директора по продажам</p>
                <p className="team-h3">+375 (17) 270-53-77 (317)</p>
                <b className="team-b">jgayratov55@gmail.com</b>
            </ul>
            <ul className="team-item">
                <img src={rasm17} alt="" className="team-img" />
                <h3 className="team-h3">Мисько Екатерина</h3>
                <p className="team-p">Начальник отдела сопровождения</p>
                <p className="team-h3">+375 (17) 270-53-77 (115)</p>
                <b className="team-b">k.melnichenko@leangroup.by</b>
            </ul>
            <ul className="team-item">
                <img src={rasm18} alt="" className="team-img" />
                <h3 className="team-h3">Дмитроченко Дмитрий</h3>
                <p className="team-p">Начальник отдела допечатной подготовки</p>
                <p className="team-h3">+375 (17) 270-53-77 (333)</p>
                <b className="team-b">dmitrochenko@leangroup.by</b>
            </ul>
            <ul className="team-item">
                <img src={rasm19} alt="" className="team-img" />
                <h3 className="team-h3">Антух Евгений</h3>
                <p className="team-p">Начальник отдела снабжения</p>
                <p className="team-h3">+375 (17) 270-53-77 (148)</p>
                <b className="team-b">j.antuh@leangroup.by</b>
            </ul>
            <ul className="team-item">
                <img src={rasm20} alt="" className="team-img" />
                <h3 className="team-h3">Мисник Елена</h3>
                <p className="team-p">Специалист по работе с клиентами</p>
                <p className="team-h3"> +375 29 329-34-03</p>
                <b className="team-b">e.misnik@leangroup.by</b>
            </ul>
        </div>
        <button className="team-btn1">Наша команда</button>
      </div>
    </div>
  )
}
export default Team
