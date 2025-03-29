// import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./css/swiper.css"

const GlobalSwiper = ({ slides }) => {
    return (
        <div className="swiper-container">
            <Swiper
                className="chanel-swiper"
                modules={[Navigation, Pagination]}
                spaceBetween={0}
                slidesPerView={12}
                loop={true}
                navigation
                autoHeight={true}
                breakpoints={{
                    0: { slidesPerView: 6 },
                    1600: { slidesPerView: 9 },
                    1850: { slidesPerView: 12 },
                }}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className={slide.selected ? " active" : ""}>
                        <div className={"slide-img"}>
                            <img src={slide.image} alt={slide.title} />
                        </div>
                        {slide.title}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

GlobalSwiper.propTypes = {
    slides: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string.isRequired,
            title: PropTypes.string,
        })
    ).isRequired,
};

export default GlobalSwiper;
