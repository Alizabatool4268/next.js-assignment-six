import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';

function Header() {
  return (
  <header className='w-screen h-fit overflow-x-hidden'>
    <div className='h-[49px] w-full bg-[#F7F7F7] ' >
      <div className="text-black h-[34px] bg-[#F7F7F7] flex justify-between items-center ">
       <p className='text-black  h-[24px] ml-7'> Phone Number: 956 742 455 678 | Email:info@ddsgnr.com </p>
       <div className='h-[24px] mr-7 w-[170px] bg-[#F7F7F7] grid grid-cols-4 place-content-around place-items-center gap-3'>
         <div><FaFacebookF className='text-black cursor-pointer'/></div>
         <div><FaInstagram className='text-black cursor-pointer'/> </div>
         <div> <FaTwitter className='text-black cursor-pointer'/> </div>
         <div> <FaLinkedin className='text-black cursor-pointer'/></div>
       </div>  
      </div>
      <div className='w-full h-2 border-t-[1px] border-[#676767]'></div>
  </div> 
  <nav className='h-[72px] w-full bg-[#F7F7F7] flex justify-around items-center border-b-[1px] border-[#676767]'>
      <Image
       src={"/Images/Ddsgnr-nav-footer.png"}
       height={41}
       width={130}
       alt='navLogo'
      ></Image>
      <div className='text-black h-[44px] flex justify-between items-center w-[910px] bg-[#FFFFFF]'>
        <Link href={"/"} className="transition duration-300 ease-in-out hover:underline decoration-solid decoration-black">Home</Link>
        <Link href={"/"} className="transition duration-300 ease-in-out hover:underline decoration-solid decoration-black">Cources</Link>
        <Link href={"/"} className="transition duration-300 ease-in-out hover:underline decoration-solid decoration-black">Services</Link>
        <Link href={"/"} className="transition duration-300 ease-in-out hover:underline decoration-solid decoration-black">Achievements</Link>
        <Link href={"/"} className="transition duration-300 ease-in-out hover:underline decoration-solid decoration-black">About us</Link>
        <Link href={"/"} className="transition duration-300 ease-in-out hover:underline decoration-solid decoration-black">Testimonial</Link>
        <button className='bg-white border-[1px] border-[#000000] rounded-[5px] h-[40px] w-20'>Login</button>
        <button className=' bg-black text-white border-[1px] border-[#000000] rounded-[5px] h-[40px] w-20'>Sign Up</button>
      </div>
  </nav>
  </header>
  
  )
}

export default Header;