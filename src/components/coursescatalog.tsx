import React from 'react';
import Image from 'next/image';

function CoursesCatalog() {
    const courses =[
        {mainImage:"/Images/ddsngr-courses-catalog-one.png", heading:"Design & Development", description:"50+ Courses Available"}, 
        {mainImage:"/Images/ddsngr-courses-catalog-two.png", heading:"Marketing", description:"50+ Courses Available"}, 
        {mainImage:"/Images/ddsngr-courses-catalog-three.png", heading:"Development", description:"50+ Courses Available"}, 
        {mainImage:"/Images/ddsngr-courses-catalog-four.png", heading:"Communication", description:"50+ Courses Available"}, 
        {mainImage:"/Images/ddsngr-courses-catalog-five.png", heading:"Digital Marketing", description:"50+ Courses Available"}, 
        {mainImage:"/Images/ddsngr-courses-catalog-six.png", heading:"Self Development", description:"50+ Courses Available"}, 
        {mainImage:"/Images/ddsngr-courses-catalog-seven.png", heading:"Business", description:"50+ Courses Available"}, 
        {mainImage:"/Images/ddsngr-courses-catalog-eight.png", heading:"Finance", description:"50+ Courses Available"}, 
        {mainImage:"/Images/ddsngr-courses-catalog-nine.png", heading:"Consulting", description:"50+ Courses Available"}, 
    ]
  return (
   <section className="h-screen w-screen overflow-x-hidden flex justify-around items-center flex-col gap-4">
    <div className="text-black h-[109px] w-[768px]">
      <h1 className="text-[48px] font-bold  md:text-[48px] max-[760]:text-[29px] mt-1">Explore Courses By Category</h1>
      <p>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
    </div>
    <div className="h-fit w-full text-black grid grid-cols-3 grid-rows-3 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 max-[639px]:grid-cols-2 max-[544px]:grid-cols-1">
       {courses.map((coursesArr,index)=>(
        <div className='h-[132px] bg-[#F7F7F7] flex justify-around items-center cursor-pointer ' key={index}>
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
    <button className='border-[1px] text-black border-black rounded-[5px] h-[48px] w-[155px] hover:bg-black hover:text-white'>View All Courses</button>
  </section>
  )
}

export default CoursesCatalog;