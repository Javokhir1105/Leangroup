import React from 'react'
import '../Paper/Paper.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import rasm6 from '../../assets/1.png'
import rasm7 from '../../assets/image 8.png'
import rasm8 from '../../assets/image 9.png'
import rasm9 from '../../assets/4.png'
import rasm10 from '../../assets/image 11.png'

function Paper() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrow:true,
    navigation:true,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='paper'>
      <hi className="paper-h1">Качество продукции подтверждают сертификаты</hi>
      <div className="paper-container">
      <Slider className='paper-slider' {...settings}>
        <div>
          <img src={rasm6} alt="" className="paper-img" />
           </div>
        <div>
        <img src={rasm7} alt="" className="paper-img" />
        </div>
        <div>
        <img src={rasm8} alt="" className="paper-img" />
        </div>
        <div>
        <img src={rasm9} alt="" className="paper-img" />
        </div>
        <div>
        <img src={rasm10} alt="" className="paper-img" />
        </div>
        <div>
        <img src={rasm8} alt="" className="paper-img" />
        </div>
        <div>
        <img src={rasm7} alt="" className="paper-img" />
        </div>
        <div>
        <img src={rasm6} alt="" className="paper-img" />
        </div>
        <div>
        <img src={rasm10} alt="" className="paper-img" />
        </div>
        <div>
        <img src={rasm9} alt="" className="paper-img" />
        </div>
      </Slider>
        </div> 
    </div>
  )
}
export default Paper
