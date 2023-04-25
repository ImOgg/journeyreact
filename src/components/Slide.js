import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import Card from './Card';
import { Link ,Outlet} from 'react-router-dom';
// Import Swiper styles
import "swiper/css";
import { Navigation } from "swiper";
const Slide = (props) => {
    const { Photo, title } = props;
    return (
        <div>
            <section className="section4">
                <div className="top">
                    <h3>{title}</h3>
                </div>
                <div className="bottom">
                    <Swiper
                        modules={[Navigation]}  // 引入module 
                        breakpoints={
                            {
                                414: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }
                        }
                        className="mySwiper"
                        loop={true}

                        navigation={{
                            nextEl: ".double_arrow_right",
                            prevEl: ".double_arrow_left"
                        }}
                    >
                          {Photo.map((photo,index) => (
                            <SwiperSlide key={index}>
                                <Link to={`/product${index}`}>
                                <Card img={photo.img} name={photo.name} dollar={photo.dollar} />
                                </Link>
                            </SwiperSlide>
                        ))}
                        <span className="material-symbols-outlined double_arrow_left">
                            keyboard_double_arrow_left
                        </span>
                        <span className="material-symbols-outlined double_arrow_right">
                            keyboard_double_arrow_right
                        </span>
                    </Swiper>
                </div>
                <Outlet />
            </section>
        </div>
    )
}

export default Slide