import React from 'react';

function Achievements() {
  return (
    <section className=' w-screen overflow-x-hidden flex justify-around items-center text-center gap-20 flex-col mt-20'>
        <div className='text-black flex justify-around items-center text-center flex-col'>
            <h1 className='text-[48px] font-bold max-xsm:text-[30px] max-msm:text-[40px] max-sm:text-[35px]'>Our Achievements</h1>
            <p className='max-xsm:hidden max-sm:hidden max-msm:hidden'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra <br /> ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
           {/* only visible on small screen*/}
           <p className='md:hidden lg:hidden 2xl:hidden text-sm '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. </p>
          <div className='flex justify-around items-center max-xsm:justify-center max-sm:justify-center max-xsm:flex-col max-sm:flex-col max-xsm:gap-2 max-sm:gap2 flex-col lg:flex-row 2xl-flex-col'>
            <div className='text-black flex justify-around h-[96px] w-[616px] items-center gap-6 max-xsm:flex-col max-sm:flex-col max-xsm:gap-2 max-sm:gap-2 '>
                <span> 
                 <p className='font-bold text-[40px] max-xsm:text-[15px] max-sm:text-[15px] max-msm:text-[25px]'>+200</p>
                 <p className='text-sm'>Courses</p> 
                 </span>
                <span>
                    <p className='font-bold text-[40px] max-xsm:text-[15px] max-sm:text-[15px] max-msm:text-[25px]'>50K</p>
                    <p className='text-sm'> Mentors</p>
                </span>
            </div>

            <div className='text-black flex justify-around h-[96px] w-[616px] items-center gap-6 max-xsm:flex-col max-sm:flex-col max-xsm:gap-2 max-sm:gap-2'>
                <span> 
                    <p className='font-bold text-[40px] max-xsm:text-[15px] max-sm:text-[15px] max-msm:text-[25px]'>370k</p>  
                    <p className='text-sm'>Students</p>
                </span>
                <span>
                    <p className='font-bold text-[40px] max-xsm:text-[15px] max-sm:text-[15px] max-msm:text-[25px]'>100+</p> 
                    <p className='text-sm'>Recognition</p>
                </span>

            </div>
          </div> 
        </div>
        {/* second achievement */}
        <div className='text-black flex justify-around items-center text-center flex-col max-xsm:hidden max-msm:hidden max-sm:hidden'>
            <h1 className='text-[48px] font-bold'>Our Achievements</h1>
            <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra <br /> ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
          <div className='flex justify-around items-center flex-col lg:flex-row 2xl-flex-col'>
            <div className='text-black flex justify-around h-[96px] w-[616px] items-center gap-6'>
                <span> 
                 <p className='font-bold text-[40px]'>+200</p>
                 <p>Courses</p> 
                 </span>
                <span>
                    <p className='font-bold text-[40px]'>50K</p>
                    <p> Mentors</p>
                </span>
            </div>

            <div className='text-black flex justify-around h-[96px] w-[616px] items-center gap-6'>
                <span> 
                    <p className='font-bold text-[40px]'>370k</p>  
                    <p>Students</p>
                </span>
                <span>
                    <p className='font-bold text-[40px]'>100+</p> 
                    <p>Recognition</p>
                </span>

            </div>
          </div> 
        </div>
    </section>
  )
}

export default Achievements;