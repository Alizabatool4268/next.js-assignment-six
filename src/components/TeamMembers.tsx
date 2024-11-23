import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import Image from 'next/image';
import membersInformation from "@/Data/Data.json";

function TeamMembers() {
    return (
    <section className='w-screen bg-[#F7F7F7] overflow-x-hidden mt-28 text-black flex flex-col justify-between items-center'>
        {/* heading and tagline */}
        <div className='h-[109px] w-[768px] flex flex-col justify-between items-center'>
            <h1 className='font-bold text-[48px]'>Our team</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
        {/*  */}
        <div className='grid grid-cols-3 grid-rows-2 gap-4 mt-7'>
            {membersInformation.members.map((membersData)=>(
                <div className='h-[273px] w-[394px] flex flex-col justify-around items-center' key={membersData.id}>
                    <Image
                    src={membersData.image}
                    height={80}
                    width={80}
                    alt={membersData.positon}
                    ></Image>

                    {/* name and position */}
                    <div className='h-[109px] w-[394px] flex flex-col justify-center items-center'>
                        <h6 className='font-bold'>{membersData.memberName}</h6>
                        <p>{membersData.positon}</p>
                    </div>
                    {/* icons */}
                    <div className='flex flex-row justify-center items-center gap-4'>
                        <FaLinkedin />
                        <FaTwitter />
                        <FaDribbble />
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default TeamMembers;