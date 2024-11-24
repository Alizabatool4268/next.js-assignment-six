import React from 'react';
import { IoStar } from "react-icons/io5";
import coursescardsData from "@/Data/Data.json";
import Image from 'next/image';


function Coursescards() {
  return (
    <section className='w-screen overflow-x-hidden text-black flex justify-center items-center gap-12 mt-20 flex-col'>
        {/* heading and tagline*/}
      <div className='flex justify-center items-center flex-col h-[118px] gap-2 w-full '>
        <h1 className='text-[56px] font-bold'>Courses</h1>
        <p>Your Ultimate Guide to learning</p>
      </div>
      {/* catagories */}
      <div className='flex justify-center h-[40px] gap-2 items-center w-screen'>
        <p className=' hover:underline decoration-solid decoration-black cursor-pointer'>Popular</p>
        <p className=' hover:underline decoration-solid decoration-black cursor-pointer'>Recommended</p>
        <p className=' hover:underline decoration-solid decoration-black cursor-pointer'>Best  Price</p>
      </div>
      {/* cards */}
      <div className='grid grid-cols-3 grid-rows-2 gap-3 max-msm:grid-cols-1 max-xsm:grid-cols-1 max-sm:grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 '>
        {coursescardsData.cousesCards.map((cards)=>(
          <div className='flex justify-center items-center w-[416px] flex-col gap-2 bg-[#F7F7F7] max-xsm:w-[380px] max-sm:w-[390px]' key={cards.id}>
            <Image
            src={cards.Image}
            height={300}
            width={416}
            alt={cards.category}
            ></Image>
            {/* deatails of cards */}
            <div className='flex justify-between items-center flex-col'>
              <div className='flex justify-between items-center w-[380px] '>
                <span>{cards.category}</span>
                <span className='flex justify-center gap-1 items-center max-sm:mr-20'><IoStar className='text-[#D9D9D9]'/> {cards.raiting}</span>
              </div>
              <div className='flex justify-between text-left flex-col w-[380px]'>
                <span className='font-bold'>{cards.Heading}</span>
                <span className='max-xsm:text-sm'>{cards.description}</span>
              </div>
              <div className='flex gap-4 items-center text-left flex-row w-[380px]'>
                <button className='border border-solid border-black rounded-[5px] h-[40px] w-[117px]'>{cards.button}</button>
                <span className='font-semibold'>{cards.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
       <button className='h-[40px] w-[152px] border-[1px] border-solid border-black rounded-[5px] hover:bg-black  hover:text-white '>View All Courses</button>
    </section>
  )
}

export default Coursescards;