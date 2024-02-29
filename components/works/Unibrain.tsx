import React from 'react';
import { TiArrowForward } from 'react-icons/ti';

const Unibrain = () => {
  return (
    <div className='w-full'>
        <h3 className='flex gap-1 font-medium text-xl font-titleFont'>UI/UX Engineer<span className='text-textGreen tracking-wide'>@Unibrain</span></h3>
        <p className='text-sm mt-1 font-medium text-textDark'>AUG 2022 - SEP 2023</p>
        <ul className='mt-6 flex flex-col gap-3'>
            <li className='text-base flex gap-2 text-textDark'>
              <span className='text-textGreen mt-1'>
                <TiArrowForward />
                </span>
                Spearheaded UI/UX development for high-profile projects including eBid, ERP, and
e-Auction mobile applications, ensuring intuitive and user-centric design.
            </li>
            <li className='text-base flex gap-2 text-textDark'>
              <span className='text-textGreen mt-1'>
                <TiArrowForward />
                </span>
                Expertly crafted engaging homepages and summary pages to enhance user experience
and facilitate seamless navigation.
            </li>
            <li className='text-base flex gap-2 text-textDark'>
              <span className='text-textGreen mt-1'>
                <TiArrowForward />
                </span>
                Implemented robust security features by developing scripts for OTP authentication,
password recovery, and OTP resending functionalities utilizing Javascript and jQuery.
            </li>
            <li className='text-base flex gap-2 text-textDark'>
              <span className='text-textGreen mt-1'>
                <TiArrowForward />
                </span>
                Led the design of a comprehensive Salary Details module, integrating payscale, basic
pay and Loss of Pay(LOP) features with React.js, and enforced data integrity through
meticulous regex pattern validation in JSP(Java Server Pages).
            </li>
        </ul>
    </div>
  )
}

export default Unibrain;
