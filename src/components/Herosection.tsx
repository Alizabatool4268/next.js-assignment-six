import React from 'react';
import Image from 'next/image';

function Herosection() {
  return (
    <section className='flex justify-between items-center w-screen overflow-hidden '>
        <div  className='flex justify-center items-center flex-col h-[300px] w-[640px] gap-6 text-left'>
            <h1 className='h-[154px] w-[500px] text-[56px] text-black font-bold'>Learn new skills online with ease</h1>
            <p className='text-black w-[500px] h-[54px]'>Discover a wide range of courses covering a variety of <br /> subjects, taught by expert instructors.</p>
            <div className='flex justify-start items-center gap-4 h-[64px] w-[498px]'>
             <button className='h-[48px] w-[178px] rounded-[5px] text-white bg-black border-[1px] border-solid border-black'>Start learning now</button> 
             <button className='h-[48px] w-[178px] rounded-[5px] text-black bg-white border-[1px] border-solid border-black'>Explore Courses</button>
            </div>
        
        </div>
        <Image
        src={"/Images/Image.png"}
        width={650}
        height={900}
        alt='herosection-Image'>
        </Image>
    </section>
  )
}

export default Herosection;