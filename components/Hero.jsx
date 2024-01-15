import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Hero = ({ heading, message, book }) => {
    // const images = [
    //     {
    //         id: 1,
    //         src: '../public/fotobarengxirpl3.jpg',
    //         alt: 'Image 1',
    //     },
    //     {
    //         id: 2,
    //         src: '../public/fotobarengxirpl3-2.jpg',
    //         alt: 'Image 2',
    //     },
    //     {
    //         id: 3,
    //         src: '../public/ayanokoji.jpg',
    //         alt: 'Image 3',
    //     },
    // ]

    // const [ currentImage, setCurrentImage ] = useState(0);
    // const nextImage = () => {
    //     setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
    // };
    // const prevImage = () => {
    //     setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage + 1);
    // };

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         nextImage();
    //     }, 5000);

    //     return () => clearInterval(interval);
    // }, []);

    return (
        <>
        <div className='pt-10'>
            <div className='relative flex justify-center items-center bg-slate-800 h-screen selection:bg-lime-500'>
                <div className='p-5 text-white z-[2] mt-[-10rem]'>
                    <h2 className='text-5xl font-bold font-[Handlee]'>{ heading }</h2>
                    <p className='py-5 text-xl font-[Raleway]'>{ message }</p>
                    <button className='px-8 py-2 border-2 select-none'>{ book }</button>
                </div>
            </div>
            <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className='bg-black container max-w-5xl'
            >
                <SwiperSlide>
                    <img src="/xirpl3/fotobarengxirpl3.jpg" priority alt='xirpl3' width="1200" height="500" className='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/xirpl3/fotobarengxirpl3-2-edited.jpg" priority alt='xirpl3' width="1500" height="500" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/xirpl3/fotobarengxirpl3.jpg" priority alt='xirpl3' width="1500" height="500" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/xirpl3/fotobarengxirpl3.jpg" priority alt='xirpl3' width="1500" height="500" />
                </SwiperSlide>
            </Swiper>
        </div>
        </>
    )
}

export default Hero