import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import Card from './Card';
import { Link ,Outlet} from 'react-router-dom';
// Import Swiper styles
import "swiper/css";
import { Navigation } from "swiper";
const Top10 = (props) => {
    const { Photo } = props;
    return (
        <div>
            <section className="section3">
                <div className="left">
                    <h3>旅遊TOP10</h3>
                    <p>大神都這樣玩</p>
                    <div className="pbbtn">
                        <span className="material-symbols-outlined circle_left">
                            arrow_circle_left
                        </span>
                        <span className="material-symbols-outlined circle_right">
                            arrow_circle_right
                        </span>
                    </div>
                </div>
                <div className="right">
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
                            nextEl: ".circle_right",
                            prevEl: ".circle_left"
                        }}
                    >
                        {Photo.map((photo,index) => (
                            <SwiperSlide key={index} >
                                <Link to={`/product${index}`}>
                                <Card img={photo.img} name={photo.name} dollar={photo.dollar} />
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section >
            <Outlet />
        </div >
    )
}

export default Top10