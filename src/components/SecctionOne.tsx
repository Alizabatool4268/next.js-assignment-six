import React from 'react';
import Image from 'next/image';

function SecctionOne() {
  return (
    <section className='h-[228px] w-screen bg-[#F7F7F7] flex justify-between items-center text-left overflow-x-hidden'>
        <h3 className='text-black ml-2 font-bold text-[24px] h-fit w-fit mt-2'>Trusted by 2000+ companies <br /> worldwide.</h3>
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