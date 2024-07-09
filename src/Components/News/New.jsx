import React from 'react'
import '../News/New.css'
import image from '../../assets/img.png'
import image2 from '../../assets/img (1).png'
import image3 from '../../assets/img (2).png'

function New() {
    return (
        <div className='News'>
            <div className="new-container">
                <h1 className="new-h1">Новости</h1>
                <div className="new-part">
                    <ul className="new-item">
                        <img src={image} alt="" className="new-img" />
                        <p className="new-p">28.01.2022</p>
                        <h2 className="new-h2">"ЛеанГрупп" серебряный призер EcoVadis!</h2>
                    </ul>
                    <ul className="new-item">
                        <img src={image2} alt="" className="new-img2" />
                        <p className="new-p">28.11.2022</p>
                        <h2 className="new-h2">"ЛеанГрупп" серебряный призер EcoVadis!</h2>
                    </ul>
                    <ul className="new-item">
                        <img src={image3} alt="" className="new-img2" />
                        <p className="new-p">24.01.2022</p>
                        <h2 className="new-h2">Туба, как вид упаковки!</h2>
                    </ul>
                </div>
                <button className="new-btn1">Все новости</button>
            </div>
        </div>
    )
}
export default New