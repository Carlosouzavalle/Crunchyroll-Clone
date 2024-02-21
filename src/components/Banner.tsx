import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import {
    FaBookmark,
    FaPlay
} from 'react-icons/fa6'

import frierin_name from '../assets/img/frierin_name.png'
import classroom_name from '../assets/img/classRoom_name.png'
import banishedHero_name from '../assets/img/banishedHero_image.png'
import saitama_name from '../assets/img/onePuch_name.png'

import A14 from '../assets/A14.svg'


import style from './Banner.module.css'


const Banner = () => {


    return (
        <section className={style.carousel_section}>
            <Carousel>
                <Carousel.Item className="carousel">
                    <img
                        id={style.backgroundCarrosel}
                        className="d-block w-100 "
                    />

                    <Carousel.Caption className="carousel">
                        <div className={style.animeInfo}>
                            <div className={style.imgFrieren}>
                                <img width="250px" src={frierin_name} alt="frierin_name" />
                            </div>
                            <div className={style.divA14}>
                                <img width='26px'src={A14} alt="" />
                                <span>
                                    • Dub | Leg
                                </span>
                            </div>
                            <div className={style.textFrieren}>
                                <p>Após uma missão de 10 anos ao lado do herói Himmel e seu grupo, a poderosa maga Frieren derrotou o Rei Demônio e trouxe paz ao reino. Como uma elfa, Frieren tem uma vida de mais de mil anos pela frente. Ela promete retornar para seus amigos e, assim, parte em uma jornada solitária.</p>
                            </div>
                            <div className={style.botaoDiv}>
                                <button className={style.botaoAssistir}>
                                    <FaPlay />
                                    Assistir EP1S1
                                </button>
                                <button className={style.bookmark}>
                                    <FaBookmark />
                                </button>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className="carousel">
                    <img
                        className="d-block w-100"
                        id={style.backgroundCarrosel2}
                    />

                    <Carousel.Caption className="carousel">
                        <div className={style.animeInfo}>
                            <div className={style.imgFrieren}>
                                <img width="250px" src={classroom_name} alt="frierin_name" />
                            </div>
                            <div className={style.divA14}>
                                <img width='26px'src={A14} alt="" />
                                <span>
                                    • Dub | Leg
                                </span>
                            </div>
                            <div className={style.textFrieren}>
                                <p>Após uma missão de 10 anos ao lado do herói Himmel e seu grupo, a poderosa maga Frieren derrotou o Rei Demônio e trouxe paz ao reino. Como uma elfa, Frieren tem uma vida de mais de mil anos pela frente. Ela promete retornar para seus amigos e, assim, parte em uma jornada solitária.</p>
                            </div>
                            <div className={style.botaoDiv}>
                                <button className={style.botaoAssistir}>
                                    <FaPlay />
                                    Assistir EP1S1
                                </button>
                                <button className={style.bookmark}>
                                    <FaBookmark />
                                </button>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>




                <Carousel.Item className="carousel">
                    <img
                        className="d-block w-100"
                        id={style.backgroundCarrosel3}
                        alt="Second slide"
                    />

                    <Carousel.Caption className="carousel">
                        <div className={style.animeInfo}>
                            <div className={style.imgFrieren}>
                                <img width="250px" src={banishedHero_name} alt="frierin_name" />
                            </div>
                            <div className={style.divA14}>
                                <img width='26px'src={A14} alt="" />
                                <span>
                                    • Dub | Leg
                                </span>
                            </div>
                            <div className={style.textFrieren}>
                                <p>Após uma missão de 10 anos ao lado do herói Himmel e seu grupo, a poderosa maga Frieren derrotou o Rei Demônio e trouxe paz ao reino. Como uma elfa, Frieren tem uma vida de mais de mil anos pela frente. Ela promete retornar para seus amigos e, assim, parte em uma jornada solitária.</p>
                            </div>
                            <div className={style.botaoDiv}>
                                <button className={style.botaoAssistir}>
                                    <FaPlay />
                                    Assistir EP1S1
                                </button>
                                <button className={style.bookmark}>
                                    <FaBookmark />
                                </button>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item className="carousel">
                    <img
                        className="d-block w-100"
                        id={style.backgroundCarrosel4}
                        alt="Sixty slide"
                    />

                    <Carousel.Caption className="carousel">
                        <div className={style.animeInfo}>
                            <div className={style.imgFrieren}>
                                <img width="250px" src={saitama_name} alt="frierin_name" />
                            </div>
                            <div className={style.textFrieren}>
                                <p>Após uma missão de 10 anos ao lado do herói Himmel e seu grupo, a poderosa maga Frieren derrotou o Rei Demônio e trouxe paz ao reino. Como uma elfa, Frieren tem uma vida de mais de mil anos pela frente. Ela promete retornar para seus amigos e, assim, parte em uma jornada solitária.</p>
                            </div>
                            <div className={style.botaoDiv}>
                                <button className={style.botaoAssistir}>
                                    <FaPlay />
                                    Jogar Agora
                                </button>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </section>
    )
}

export default Banner