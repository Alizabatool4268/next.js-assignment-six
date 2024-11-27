import React from 'react';
import Image from 'next/image';
import coursesCatalogData from "@/Data/Data.json";
import {Button} from "@/components/ui/button"

function CoursesCatalog() {
  return (
   <section className="w-screen overflow-x-hidden flex mt-14 justify-between items-center flex-col gap-4">
    <div className="text-black h-[109px] w-[768px] max-sm:w-[385px] max-xsm:w-[300px] max-msm:w-[400px] cs:w-[300px] cs:h-[200px]">
      <h1 className="text-[48px] font-bold md:text-[48px] max-[760]:text-[29px] mt-1 max-sm:text-[32px] max-msm:text-[34px] cs:text-center">Explore Courses By Category</h1>
      <p className='cs:text-sm'>Discover a wide range of courses covering a <br className='lg:hidden md:hidden sm:hidden 2xl:hidden cs:hidden'/> variety of subjects, taught by expert instructors.</p>
    </div>
    <div className="h-fit w-full mt-8 text-black grid grid-cols-3 grid-rows-3 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl-grid-cols-3 max-xsm:grid-cols-1 max-sm:grid-cols-1 max-msm:grid-cols-1">
       {coursesCatalogData.coursesCatalog.map((coursesArr)=>(
        <div className='h-[132px] bg-[#F7F7F7] flex justify-around items-center cursor-pointer ' key={coursesArr.id}>
            {/* main Image */}
            <Image
            src={coursesArr.mainImage}
            height={100}
            width={100}
            alt={coursesArr.heading}
            ></Image>
            {/* content and main heading */}
            <div>
                <h6 className='font-bold'>{coursesArr.heading}</h6>
                <p>{coursesArr.description}</p>
            </div>
        </div>
       ))}
    </div>
    <Button variant={"ghost"} className='mt-11 rounded-[5px] h-[48px] w-[155px] hover:bg-black hover:text-white'>View All Courses</Button>
  </section>
  )
}

export default CoursesCatalog;