import React from 'react'
import '../Product/Product.css'
import rasm11 from '../../assets/1 (1).png'
import rasm12 from '../../assets/2.png'
import rasm13 from '../../assets/3.png'
import rasm14 from '../../assets/4 (1).png'
import rasm15 from '../../assets/5.png'

 function Product() {
  return (
    <div className='product'>
      <div className="product-container">
        <h1 className="product-h1">Наша продукция</h1>
        <ul className="product-item1">
            <button className="product-btn">Ламинатные тубы</button>
            <button className="product-btn">Экструзионные тубы</button>
            <button className="product-btn">Другая упаковка</button>
        </ul>
        <ul className="product-item">
            <img src={rasm11}  className="product-img" />
            <img src={rasm12}  className="product-img" />
            <img src={rasm13}  className="product-img" />
            <img src={rasm14}  className="product-img" />
            <img src={rasm15}  className="product-img" />
        </ul>
        <button className="product-btn1">Перейти в каталог</button>
      </div>
    </div>
  )
}
export default Product
