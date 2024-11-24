import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import Image from 'next/image';
import Link from 'next/link';

function Header() {
  return (
  <header className='w-screen h-fit overflow-x-hidden'>
    <div className='h-[49px] w-full bg-[#F7F7F7] ' >
      <div className="text-black h-[34px] bg-[#F7F7F7] flex justify-between items-center">
       <p className='text-black max-sm:hidden h-[24px] ml-7 sm:text-sm max-msm:text-sm max-msm:ml-3'> Phone Number: 956 742 455 678 | Email:info@ddsgnr.com </p>
       {/* display on smaller screens only */}
       <Image
        src={"/Images/Ddsgnr-nav-footer.png"}
        height={41}
        width={109}
        alt='logo'
        className='max-sm:visible md:hidden lg:hidden 2xl:hidden sm:hidden max-msm:hidden'
       ></Image>
       <div className='h-[24px] mr-7 w-[170px] bg-[#F7F7F7] grid grid-cols-4 place-content-around place-items-center gap-3 max-sm:hidden max-msm:text-sm max-msm:gap-2 max-msm:mr-3'>
         <div><FaFacebookF className='text-black cursor-pointer'/></div>
         <div><FaInstagram className='text-black cursor-pointer'/> </div>
         <div> <FaTwitter className='text-black cursor-pointer'/> </div>
         <div> <FaLinkedin className='text-black cursor-pointer'/></div>
       </div>
         {/*visible on small screens only */}
         <div className='max-sm:visible md:hidden lg:hidden 2xl:hidden sm:hidden max-msm:hidden max-sm:mr-2'><FaBars/></div>
      </div>
      <div className='w-full h-2 border-b-[1px] border-[#676767] max-msm:border-b-[1px]'></div>
    </div> 
  <nav className='h-[72px] w-full max-sm:hidden bg-[#F7F7F7] flex justify-around items-center border-b-[1px] border-[#676767]'>
      <Image
       src={"/Images/Ddsgnr-nav-footer.png"}
       height={41}
       width={130}
       alt='navLogo'
      ></Image>
      <div className='text-black h-[44px] flex justify-between items-center w-[910px] bg-[#FFFFFF] md:text-sm lg:text-[16px] sm:w-[800px] sm:text-sm max-msm:text-sm'>
        <Link href={"/"} className="transition duration-300 ease-in-out hover:underline decoration-solid decoration-black">Home</Link>
        <Link href={"/"} className="transition duration-300 ease-in-out hover:underline decoration-solid decoration-black">Cources</Link>
        <Link href={"/"} className="transition duration-300 ease-in-out hover:underline decoration-solid decoration-black">Services</Link>
        <Link href={"/"} className="transition duration-300 ease-in-out hover:underline decoration-solid decoration-black max-msm:hidden">Achievements</Link>
        <Link href={"/"} className="transition duration-300 ease-in-out hover:underline decoration-solid decoration-black">About us</Link>
        <Link href={"/"} className="transition duration-300 ease-in-out hover:underline decoration-solid decoration-black max-msm:hidden">Testimonial</Link>
        <button className='bg-white border-[1px] border-[#000000] rounded-[5px] h-[40px] w-20 max-msm:w-16'>Login</button>
        <button className=' bg-black text-white border-[1px] border-[#000000] rounded-[5px] h-[40px] w-20 max-msm:w-16'>Sign Up</button>
      </div>
  </nav>
  </header>
  
  )
}

export default Header;