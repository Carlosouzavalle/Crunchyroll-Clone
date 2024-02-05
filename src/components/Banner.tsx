import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import frieren from '../assets/img/frierin.jpg'
import classRoom from '../assets/img/classRoom.jpg'
import BanishedHero from '../assets/img/banishedHero.jpg'
import saitama from '../assets/img/saitama.jpg'

import frierin_name from '../assets/img/frierin_name.png'
import classroom_name from '../assets/img/classRoom_name.png'
import onePunch_name from '../assets/img/onePuch_name.png'
import banishedHero_name from '../assets/img/banishedHero_image.png'

import A14 from '../assets/A14.svg'

import style from './Banner.module.css'


const Banner = () => {


    return (
        <section className={style.carousel_section}>
            <Carousel>
                <Carousel.Item className="carousel d-flex">

                    <img
                        className="d-block w-100"
                        src={frieren}
                        alt="First slide"
                    />
                    <Carousel.Caption className="carousel">
                        <div className={style.animeInfo}>
                            <div className={style.imgFrieren}>
                                <img width="250px" src={frierin_name} alt="frierin_name" />
                            </div>
                            <div className={style.textFrieren}>
                                <p>Após uma missão de 10 anos ao lado do herói Himmel e seu grupo, a poderosa maga Frieren derrotou o Rei Demônio e trouxe paz ao reino. Como uma elfa, Frieren tem uma vida de mais de mil anos pela frente. Ela promete retornar para seus amigos e, assim, parte em uma jornada solitária.</p>
                            </div>
                        </div>
                    </Carousel.Caption>

                </Carousel.Item>


                {/* <Carousel.Item className="carousel">
                    <img
                        className="d-block w-100"
                        src={classRoom}
                        alt="Second slide"
                    />

                    <div className={style.animeInfo} id={style.animeInfo2}>
                        <img className={style.classRoomImg} width="250px" src={classroom_name} alt="classroom_name" />
                        <div className={style.animeInfo2}>
                            <p>Após uma missão de 10 anos ao lado do herói Himmel e seu grupo, a poderosa maga Frieren derrotou o Rei Demônio e trouxe paz ao reino. Como uma elfa, Frieren tem uma vida de mais de mil anos pela frente. Ela promete retornar para seus amigos e, assim, parte em uma jornada solitária.</p>
                        </div>
                    </div>
                </Carousel.Item>

                <Carousel.Item className="carousel">
                    <img
                        className="d-block w-100"
                        src={BanishedHero}
                        alt="Second slide"
                    />

                    <div className={style.animeInfo} id={style.animeInfo}>
                        <img className={style.banishedHeroImg} width="150px" src={banishedHero_name} alt="classroom_name" />
                        <div className={style.animeInfo3}>
                            <p>Após ser traído pelos Heróis, Red espera poder recomeçar em uma pequena cidade... mas manter segredo de seu passado não será fácil.</p>
                        </div>
                    </div>
                </Carousel.Item>


                <Carousel.Item className="carousel">
                    <img
                        className="d-block w-100"
                        src={saitama}
                        alt="Sixty slide"
                    />

                    <div className={style.animeInfo}>
                        <div className={style.onePuchInfo}>
                            <img width="250px" src={onePunch_name} alt="frierin_name" />
                            <p>Esmurre sem dó! A espera finalmente acabou!</p>
                        </div>
                    </div>
                </Carousel.Item>
                Add more Carousel.Item components for additional slides */}
            </Carousel>
        </section>
    )
}

export default Banner