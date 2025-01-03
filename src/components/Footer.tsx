import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import {Button} from "@/components/ui/button"

function Footer() {
  return (
    <footer className='text-black w-screen overflow-x-hidden'>
      {/* footer section one */}
      <div className='flex flex-row justify-between items-center max-msm:flex-row max-sm:flex-col max-xsm:flex-col max-xsm:mt-0'>
          <div className='flex flex-col justify-center items-start'>
            <h6 className='font-bold'>Subscribe to our newsletter</h6>
            <p className='max-msm:text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div> 
          <div>
            <div className='flex flex-row justify-center items-center gap-2 max-msm:flex-col max-sm:flex-col max-xsm:flex-col'>
             <input type="email" placeholder='Enter your email' className=' w-[265px] pl-8 border-[1px] border-solid border-black rounded-[5px] h-[48px] max-sm:[200px] '/>
             <Button variant={"ghost"} className='border-[1px] w-[119px] border-solid border-black rounded-[5px] h-[48px] hover:bg-black hover:text-white max-msm:w-[265px] max-sm:w-[265px] max-sm:[200px]'>Subscribe</Button>
           </div>
            <p className='text-sm'>By subscribing you agree to with our <Link href={"/"} className='underline decoration-[#D8D8D8]'>Privacy Policy</Link></p>
          </div>
      </div>
      {/* footer section two */}
      <div className='grid grid-cols-4 grid-rows-1 max-msm:grid-cols-2 max-sm:grid-cols-1 max-xsm:grid-cols-1 max-xsm:gap-1 max-xsm:mt-2'>
        <Image
        src={"/Images/Ddsgnr-nav-footer.png"}
        height={40}
        width={250}
        alt='logo'
        className='max-xsm:w-[150px] max-xsm:mt-4 max-sm:w-[170px] max-msm:w-[200px]'
        ></Image>
        <div className=' h-[225px] w-[250px] flex flex-col justify-between items-start max-xsm:items-center max-sm:items-center max-sm:ml-10'>
          <h5 className='font-bold text-[20px]'>Courses</h5>
          <Link href={"/"}>Business</Link>
          <Link href={"/"}>Development</Link>
          <Link href={"/"}>Technology</Link>
          <Link href={"/"}>Design</Link>
          <Link href={"/"}>Programming</Link>
        </div>
        <div className=' h-[225px] w-[250px] flex flex-col justify-between items-start max-xsm:items-center max-sm:items-center max-sm:ml-10'>
          <h5 className='font-bold text-[20px]'>Resources</h5>
          <Link href={"/"}>Career</Link>
          <Link href={"/"}>Resume</Link>
          <Link href={"/"}>Learning</Link>
          <Link href={"/"}>Interview Preparation</Link>
          <Link href={"/"}>Jobs</Link>
        </div>
        <div className=' h-[225px] w-[250px] flex flex-col justify-between items-start max-xsm:items-center max-sm:items-center max-sm:ml-10'>
          <h5 className='font-bold text-[20px]'>About Us</h5>
          <Link href={"/"}>Contact</Link>
          <Link href={"/"}>Help/Support</Link>
          <Link href={"/"}>FAQ</Link>
          <Link href={"/"}>Terms and Conditions</Link>
          <Link href={"/"}>Partners</Link>
        </div>
      </div>
      {/* footer section three */}
        <div className='w-screen border-solid border-[1px] border-black flex flex-row justify-between items-center pb-2
         max-msm:flex-col max-sm:flex-col max-xsm:flex-col max-xsm:border-b-0 max-xsm:border-r-0 max-xsm:border-l-0'>
            <div className='cursor-pointer flex flex-row justify-center items-center gap-4 max-msm:flex-col max-xsm:flex-col max-sm:flex-col'>
               <p>2023 Ddsgnr. All right reserved.</p>
               <p className='underline decoration-[#D8D8D8]'>Privacy Policy</p>
               <p className='underline decoration-[#D8D8D8]'>Terms of Service</p>
               <p className='underline decoration-[#D8D8D8]'>Cookies Settings</p>
            </div>
            <div className='flex flex-row justify-center w-[100px] items-center gap-3 mr-7 max-sm:m-0 max-xsm:m-0'>
               <FaFacebookF />
               <FaInstagram  />
               <FaLinkedin />
               <FaTwitter />
            </div>
        </div>
    </footer>
  )
}

export default Footer;