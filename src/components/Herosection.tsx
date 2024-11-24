import React from 'react';
import Image from 'next/image';

function Herosection() {
  return (
    <section className='flex justify-between items-center max-sm:flex-col w-screen overflow-hidden max-msm:flex-col'>
        <div  className='flex justify-center items-center flex-col h-[300px] w-[640px] gap-6 text-left max-sm:w-[380px] max-sm:gap-0 max-msm:w-[380px] max-xsm:w-[280px] max-xsm:text-center'>

            <h1 className='h-[154px] w-[500px] text-[56px] text-black font-bold max-sm:text-[40px] max-sm:w-[380px] max-msm:text-[40px] max-msm:w-[380px] max-xsm:w-[280px]'>
              Learn new skills <br className='max-sm:visible lg:hidden 2xl:hidden md:hidden sm:hidden max-msm:hidden' /> online with ease</h1>

            <p className='text-black flex justify-center items-start w-[500px] h-[54px] max-sm:w-[380px]  max-msm:w-[380px]  max-xsm:w-[270px] max-xsm:text-[10px]'>
              Discover a wide range of courses covering a variety of <br className='max-sm:hidden max-msm:hidden lg:hidden max-xsm:visible' /> subjects, taught by expert instructors.</p>

            <div className='flex justify-start items-center gap-4 h-[64px] w-[498px] max-sm:w-[380px] max-msm:w-[380px] max-xsm:[250px] max-xsm:flex-col max-xsm:h-[200px]'>
             <button className='h-[48px] w-[178px] rounded-[5px] text-white bg-black border-[1px] border-solid border-black  max-sm:w-[164px] max-xsm:w-[100px]'>Start learning now</button> 
             <button className='h-[48px] w-[178px] rounded-[5px] text-black bg-white border-[1px] border-solid border-black max-sm:w-[164px] max-xsm:w-[100px]'>Explore Courses</button>
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