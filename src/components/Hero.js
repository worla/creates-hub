import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper and SwiperSlide
import { Pagination } from 'swiper/modules'; // Import Pagination from modules
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/pagination'; // Import Pagination styles
import slider3 from '../images/4.png';

import slider1 from '../images/1.png'; // Image imports
import slider2 from '../images/3.png';

const Hero = () => {
    return (
        <>
            <div className="hero" id='hero'>
                <div>
                    <NavBar />
                </div>
                
                <div className="overflow-hidden mt-8 lg:mt-4 h-5/6" data-aos="zoom-in">

                <div className="hero w-full" id='hero'>
                <div className="mt-6 lg:mt-20 h-5/6 w-full" data-aos="zoom-in">
                <div className="w-full" data-aos="fade-up" data-aos-delay="700">
                        {/* Swiper Slider */}
                        <Swiper
                            modules={[Pagination]} 
                            pagination={{ clickable: true }}
                            spaceBetween={30}
                            slidesPerView={1}
                            className="w-full h-full" // Ensure swiper takes full width and height
                        >
                            <SwiperSlide>
                                <img src={slider3} alt="Slider 1" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={slider2} alt="Slider 2" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={slider1} alt="Slider 3" className="w-full h-full object-cover" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
                </div>
            </div>
        </>
    )
}

export default Hero;