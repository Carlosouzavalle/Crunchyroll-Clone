import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import style from '../components/CardBanner.module.css'


import card1 from '../assets/img/card1.jpg'
import card2 from '../assets/img/card2.jpg'
import card3 from '../assets/img/card3.jpg'
import card4 from '../assets/img/card4.jpg'
import card5 from '../assets/img/card5.jpg'
import card6 from '../assets/img/card6.jpg'

const CardCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className={style.Cardcontainer}>
            <h3>Uma amostra da temporada de inverno 2024</h3>
            <p>Assista os três primeiros episódios desses simulcasts da inverno 2024 de graça!</p>
            <Slider {...settings}>
                <div className={style.divCard}>
                    <img src={card1} alt="" className={style.card} />
                    <p>This is card 1</p>
                </div>
                <div className={style.divCard}>
                    <img src={card2} alt="" className={style.card} />
                    <p>This is card 2</p>
                </div>
                <div className={style.divCard}>
                    <img src={card3} alt="" className={style.card} />
                    <p>This is card 3</p>
                </div>
                <div className={style.divCard}>
                    <img src={card4} alt="" className={style.card} />
                    <p>This is card 4</p>
                </div>
                <div className={style.divCard}>
                    <img src={card5} alt="" className={style.card} />
                    <p>This is card 4</p>
                </div>
                <div className={style.divCard}>
                    <img src={card6} alt="" className={style.card} />
                    <p>This is card 4</p>
                </div>
                {/* Add more cards as needed */}
            </Slider>
        </div>
    );
};

export default CardCarousel;
