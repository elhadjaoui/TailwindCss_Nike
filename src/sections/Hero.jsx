import React from 'react'
import { arrowRight } from '../assets/icons'
import { bigShoe1 } from '../assets/images'
import Button from '../components/Button'
import { shoes, statistics } from '../constants'
import ShoeCard from '../components/ShoeCard'
import { useState } from 'react'

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)
  return (
    <section id='home' className='flex w-full xl:flex-row 
    flex-col justify-center  min-h-screen 
    max-container gap-10'>
      <div className='flex relative flex-col justify-center  w-full  max-xl:padding-x pt-28 items-start xl:w-2/5'>
        <p className=' text-xl font-montserrat text-coral-red'>Our Summer Collection</p>
        <h1 className=' mt-10 font-palanquin 
        font-bold text-8xl
        max-sm:text-[72px] max-sm:leading-[82%]'>
          <span className=' xl:bg-white xl:whitespace-nowrap 
          relative z-10 pr-10 rounded-md
          '>The New Arrivals</span>
          <br />
          <span className=' text-coral-red inline-block mt-3'>Nike</span> Shoes
        </h1>
        <p className=' font-montserrat text-lg 
         text-slate-gray  leading-8 mt-6 mb-14   max-w-sm'>Discover Stylish Nike Arrival, Quality Comfort and innovation of your active life.</p>
        <Button label='Shop now' iconUrl={arrowRight} />
        <div className='flex justify-start flex-wrap items-start gap-16
         w-full mt-20'>
          {
            statistics.map((statistic, index) => (
              <div key={index} >
                <p className='text-4xl font-bold font-palanquin'>{statistic.value}</p>
                <p className='  leading-7 text-slate-gray font-montserrat'>{statistic.label}</p>
              </div>
            ))
          }
        </div>
      </div>
      <div className=' relative flex flex-1 justify-center items-center xl:min-h-screen
        max-xl:py-40 bg-primary bg-hero bg-cover bg-center
      '>
        <img src={bigShoeImg} alt="shoe1" width={610} height={500}
          className=" z-10 relative  object-contain" />
        <div className='flex   absolute sm:gap-6  gap-4
          -bottom-[5%] sm:left-[10% max-sm:px-6]'>
          {shoes.map((shoe) => (
            <div key={shoe} className=''>
              <ShoeCard
                imgUrl={shoe}
                BigShoe={bigShoeImg}
                changeShoe={(shoe) => {setBigShoeImg(shoe)}}
              />
            </div>

          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero