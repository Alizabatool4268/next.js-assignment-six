import React from 'react';
import { IoStar } from "react-icons/io5";
import customerTestimonials from "@/Data/Data.json";
import Image from 'next/image';
import { PiArrowCircleLeftLight } from "react-icons/pi";
import { PiArrowCircleRightLight } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";

function CustomerTestimonials() {
  return (
   <section className='h-screen w-screen bg-[#F7F7F7] pt-16 text-black '>
   {/* heading and tagline */}
   <div className='h-[109px] w-[509px] ml-9'>
     <h2 className='text-[48px] font-bold'>Customer testimonials</h2>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
   </div>
   <div className='flex justify-between items-center flex-col mt-8'>
    <div className='grid grid-cols-3 grid-rows-1'>
     {customerTestimonials.testimonials.map((testimonialArr)=>(
        <div className='h-[321px] w-[362px] ml-4 border-black border-solid border-[1px] flex justify-around items-center flex-col' key={testimonialArr.id}>
            <div className='h-5 w-[330px] flex justify-start items-center'>
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
            </div>
            <div className='h-[215px] w-[298px] flex justify-around items-start flex-col'>
                <p>{testimonialArr.insights}</p>
                <div className='flex justify-start items-center gap-5'>
                    <Image
                      src={testimonialArr.image}
                      height={56}
                      width={56}
                      alt={testimonialArr.name}
                      className='rounded-[50%]'
                    ></Image>
                    <div>
                    <h6 className='font-bold'>{testimonialArr.name}</h6>
                    <p>{testimonialArr.position}</p>
                    </div>
                </div>
            </div>
        </div>
      ))}
     </div>
      <div className='flex justify-between items-center w-screen mt-8'>
        <div className='flex justify-center items-center ml-20'>
         <GoDotFill />
         <GoDotFill className='text-[#8D8D8D]' />
         <GoDotFill className='text-[#8D8D8D]' />
         <GoDotFill className='text-[#8D8D8D]' />
         <GoDotFill className='text-[#8D8D8D]' />
        </div>
        <div className='flex justify-center items-center text-[35px] gap-3 mr-20'>
            <PiArrowCircleLeftLight  className='cursor-pointer'/>
            <PiArrowCircleRightLight className='cursor-pointer' />
        </div>
      </div>
   </div>
   </section>
  )

}
export default CustomerTestimonials;