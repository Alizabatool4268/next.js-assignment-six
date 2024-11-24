import React from 'react';
import Image from 'next/image';

function SecctionOne() {
  return (
    <section className='h-[228px] w-screen bg-[#F7F7F7] flex justify-between items-center text-left overflow-x-hidden'>
        <h3 className='text-black ml-2 font-bold text-[24px] h-fit w-fit mt-2 max-sm:hidden max-xsm:hidden'>Trusted by 2000+ companies <br /> worldwide.</h3>
        {/* only visible on small screen */}
        <h6 className='font-bold text-black max-msm:hidden sm:hidden md:hidden lg:hidden 2xl:hidden'>Trusted by the worlds best companies [social proof to build credibility]</h6>
        <div className='flex flex-row mr-2 justify-between h-[56px] w-fit'>
            <Image
            src={"/Images/ddsgnr-achievement-Image-one.png"}
            height={38}
            width={123}
            alt='trustedCompanyOne'
            ></Image>
            <Image
            src={"/Images/ddsgnr-achievement-Image-two.png"}
            height={38}
            width={123}
            alt='trustedCompanyOne'
            ></Image>
            <Image
            src={"/Images/ddsgnr-achievement-Image-three.png"}
            height={38}
            width={123}
            alt='trustedCompanyOne'
            ></Image>
            <Image
            src={"/Images/ddsgnr-achievement-Image-four.png"}
            height={38}
            width={123}
            alt='trustedCompanyOne'
            ></Image>
            <Image
            src={"/Images/ddsgnr-achievement-Image-five.png"}
            height={38}
            width={123}
            alt='trustedCompanyOne'
            ></Image>
            <Image
            src={"/Images/ddsgnr-achievement-Image-six.png"}
            height={38}
            width={123}
            alt='trustedCompanyOne'
            ></Image>
        </div>
    </section>
  )
}

export default SecctionOne;