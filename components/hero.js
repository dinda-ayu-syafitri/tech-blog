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
    <section className='my-0 sm:my-14 text-center mx-auto min-w-0 sm:max-w-[80%] rounded-none grid grid-cols-1 sm:grid-cols-4 sm:rounded-lg h-screen sm:h-4/5 hero drop-shadow-2xl'>
      <div className="hero-title relative sm:col-span-1 h-full drop-shadow-2xl">
        <div className="overlay-bg rounded-none sm:rounded-l-lg absolute
        " style={{
          backgroundImage: `url(${bgHero.src})`,
          width: '100%',
          height: '100%',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}>
        </div>
        <div className="overlay rounded-none sm:rounded-l-lg absolute"></div>
        <div className="head-categories absolute flex justify-center content-center flex-wrap w-full h-full">
      <h1 className='text-4xl font-bold h-fit'>Trending</h1>
      </div>
      </div>

      <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay:3000
      }}
      className='w-full col-span-1 sm:col-span-3 border-solid border-2 rounded-none sm:rounded-r-lg'
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
    <div className="hero-content py-10 px-12 rounded-none sm:rounded-r-lg flex justify-center items-center">
      <div className="post-info">
        <h2 className='py-5 text-3xl font-bold'>Judul Artikel</h2>
        <p className='py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptates, veritatis quas ullam quae magnam labore, quam eveniet aperiam laborum doloremque repudiandae esse perferendis atque dolorum explicabo quo quod quibusdam illo expedita! Vel fugit, saepe enim nemo dicta laborum veniam. Harum, enim tempore. Quod, nostrum obcaecati nesciunt architecto quos eius?</p>
        <div className="buttonContainer flex justify-center p-4 h-full">
                <Link href={`/articles/1`} className='button drop-shadow-lg'>Read More</Link>
        </div>
      </div>
        </div>
  )
}