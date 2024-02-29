import React from 'react';
import { TiArrowForward } from 'react-icons/ti';

const Testyantra = () => {
  return (
    <div className='w-full'>
        <h3 className='flex gap-1 font-medium text-xl font-titleFont'>Associate Software Engineer<span className='text-textGreen tracking-wide'>@Testyantra</span></h3>
        <p className='text-sm mt-1 font-medium text-textDark'>JAN 2022 - JUL 2022</p>
        <ul className='mt-6 flex flex-col gap-3'>
            <li className='text-base flex gap-2 text-textDark'>
              <span className='text-textGreen mt-1'>
                <TiArrowForward />
                </span>
                Engineered robust single-page applications with responsive UI, leveraging HTML5,
CSS3, Media queries and modern frameworks such as React.js
            </li>
            <li className='text-base flex gap-2 text-textDark'>
              <span className='text-textGreen mt-1'>
                <TiArrowForward />
                </span>
                Expertise in crafting dynamic web pages utilizing HTML5, CSS3, Javascript,
complemented by Bootstrap and Tailwind CSS for streamlined development.
            </li>
            
        </ul>
    </div>
  )
}

export default Testyantra;
