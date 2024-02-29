import React from 'react';
import { TiArrowForward } from 'react-icons/ti';

const Houzbay = () => {
  return (
    <div className='w-full'>
        <h3 className='flex gap-1 font-medium text-xl font-titleFont'>Junior UI Developer <span className='text-textGreen tracking-wide'>@Houzbay</span></h3>
        <p className='text-sm mt-1 font-medium text-textDark'>Oct 2023 - Present</p>
        <ul className='mt-6 flex flex-col gap-3'>
            <li className='text-base flex gap-2 text-textDark'>
              <span className='text-textGreen mt-1'>
                <TiArrowForward />
                </span>
                Worked on dynamic landing pages with Javascript Swiper and API Connectivity.
            </li>
            <li className='text-base flex gap-2 text-textDark'>
              <span className='text-textGreen mt-1'>
                <TiArrowForward />
                </span>
                Integrated social media plugins and implemented secure authentication utilizing Google
Cloud Console.
            </li>
            <li className='text-base flex gap-2 text-textDark'>
              <span className='text-textGreen mt-1'>
                <TiArrowForward />
                </span>
                Integrated custom form validation script to ensure robust form validation and seamless
email integration.
            </li>
            <li className='text-base flex gap-2 text-textDark'>
              <span className='text-textGreen mt-1'>
                <TiArrowForward />
                </span>
                Crafted interactive data visualization for price trends employing Apex Chart plugin and
enhanced UI with custom icons for amenities
            </li>
        </ul>
    </div>
  )
}

export default Houzbay