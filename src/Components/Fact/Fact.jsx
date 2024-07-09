import React from 'react'
import '../Fact/Fact.css'

 function Fact() {
  return (
    <div className='fact'>
      <div className="fact-container">
        <ul className="fact-item">
          <h1 className="fact-h1">Получить подробную информацию</h1>
          <p className="fact-p">Просто заполните форму, наш менеджер свяжетсяс вами в ближайшее время</p>
        </ul>
        <ul className="fact-item1">
          <li className="fact-li">
            <input className='input-text'placeholder='Ваше имя' type='text' gvg  required/>
            <input  className='input-text'placeholder='+375 (29) 0000000' type='number'  required/>
          </li>
          <input placeholder='Комментарий' className='input-text2' type='text'  required/>
        </ul>
        <button className="fact-button">Получить информацию</button>
      </div>
    </div>
  )
}
export default Fact
