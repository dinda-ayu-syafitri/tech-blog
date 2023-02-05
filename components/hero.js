import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import bgHero from './../public/img/1.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, { Autoplay } from 'swiper';


export default function Hero() {

  SwiperCore.use(Autoplay)
  return (
    <section className='my-0 sm:my-5 text-center mx-auto bg-gray-300 min-w-0 sm:max-w-[80%] rounded-none grid grid-cols-1 sm:grid-cols-4 sm:rounded-lg h-screen sm:h-fit'>
      <div className="hero-title relative sm:col-span-1">
        <div className="overlay rounded-none sm:rounded-l-lg
        " style={{
          backgroundImage: `url(${bgHero.src})`,
          width: '100%',
          height: '100%',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}>
        </div>
        <div className="head-categories">
      <h1>Trending</h1>
      </div>
      </div>

      <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay:2000
      }}
      className='w-full col-span-1 sm:col-span-3'
    >
      <SwiperSlide>{Slider()}</SwiperSlide>
      <SwiperSlide>{Slider()}</SwiperSlide>
      <SwiperSlide>{Slider()}</SwiperSlide>
      <SwiperSlide>{Slider()}</SwiperSlide>
    </Swiper>


        
    </section>
  )
}

function Slider() {
  return(
    <div className="hero-content py-10 px-12 bg-slate-600 rounded-none sm:rounded-r-lg">
      <div className="post-info">
        <h2 className='py-5'>Judul Artikel</h2>
        <spans>Author Name | Date</spans>
        <p className='py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptates, veritatis quas ullam quae magnam labore, quam eveniet aperiam laborum doloremque repudiandae esse perferendis atque dolorum explicabo quo quod quibusdam illo expedita! Vel fugit, saepe enim nemo dicta laborum veniam. Harum, enim tempore. Quod, nostrum obcaecati nesciunt architecto quos eius?</p>
      </div>
        </div>
  )
}