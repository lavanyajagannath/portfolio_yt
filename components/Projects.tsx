import React from 'react'
import SectionTitle from './SectionTitle'
import Image from 'next/image'
import { amazonImg, movieImg, shoppinCartImg } from '@/public/assets'
import { TbBrandGithub } from 'react-icons/tb'
import { RxOpenInNewWindow } from 'react-icons/rx'

const Projects = () => {
  return (
    <section id='project' className='max-w-container mx-auto lgl:px-20 py-24'>
        <SectionTitle title='Some Things I have Built' titleNo="03" />
        {/* Project one */}
        <div className='w-full flex flex-col items-center justify-between gap-28 mt-10'>
        <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
            <div className='flex flex-col xl:flex-row gap-6'>
                <a className='w-full xl:w-1/2 h-auto relative group' href="https://roaring-cuchufli-6c02c7.netlify.app/" target='_blank'>
                <div>
                <Image className='w-full h-full object-contain' src={amazonImg} alt='amazonImg' />
            </div>
                </a>
                <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10'>
                <p className='font-titleFont text-textGreen text-sm tracking-wide'>Featured Project</p>
                <h3 className='text-2xl font-bold'>Amazon Clone 2.0</h3>
                <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
                    An Amazon clone website for visualizing personalized Amazon website. View your products, Add your account with{" "} 
                    <span className='text-textGreen'>O-auth</span>
                </p>
                <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                    <li>Reactjs</li>
                    <li>Javascript</li>
                    <li>Netlify</li>
                    <li>Firebase</li>
                </ul>
                <div className='text-2xl flex gap-4'>
                    <a
                    className='hover:text-textGreen duration-300'
                     href="https://github.com/lavanyajagannath" target='_blank'>
                        <TbBrandGithub />
                    </a>
                    <a
                    className='hover:text-textGreen duration-300'
                     href="https://roaring-cuchufli-6c02c7.netlify.app/" target='_blank'>
                        <RxOpenInNewWindow />
                    </a>
                </div>
            </div>
            </div>
            
        </div>
        {/* Project two */}
        <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
            <div className='flex flex-col xl:flex-row-reverse gap-6'>
                <a className='w-full xl:w-1/2 h-auto relative group' href=" sivadass/react-shopping-cart" target='_blank'>
                <div>
                <Image className='w-full h-full object-contain' src={shoppinCartImg} alt='shoppingCartImg' />
            </div>
                </a>
                <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10'>
                <p className='font-titleFont text-textGreen text-sm tracking-wide'>Featured Project</p>
                <h3 className='text-2xl font-bold'>Shopping Cart</h3>
                <p className='bg-[#112240] text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md'>
                    An Shopping cart website for users to buy online, adding to cart and removing from cart,logging in.{" "} 
                    
                </p>
                <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>SCSS</li>
                </ul>
                <div className='text-2xl flex gap-4'>
                    <a
                    className='hover:text-textGreen duration-300'
                     href="https://github.com/lavanyajagannath" target='_blank'>
                        <TbBrandGithub />
                    </a>
                </div>
            </div>
            </div>
            
        </div>
        </div>
        
        {/* Project three */}
        <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
            <div className='flex flex-col xl:flex-row gap-6'>
                <a className='w-full xl:w-1/2 h-auto relative group' href="https://github.com/lavanyajagannath/Movie_website" target='_blank'>
                <div>
                <Image className='w-full h-full object-contain' src={movieImg} alt='movieImg' />
            </div>
                </a>
                <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10'>
                <p className='font-titleFont text-textGreen text-sm tracking-wide'>Featured Project</p>
                <h3 className='text-2xl font-bold'>Cinema App</h3>
                <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
                    An Cinema website for visualizing personalized Cinema website. Watch latest movies, search functionality.
                    
                </p>
                <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                    <li>Reactjs</li>
                    <li>Javascript</li>
                    <li>Vercel</li>
                    
                </ul>
                <div className='text-2xl flex gap-4'>
                    <a
                    className='hover:text-textGreen duration-300'
                     href="https://github.com/lavanyajagannath" target='_blank'>
                        <TbBrandGithub />
                    </a>
                    <a
                    className='hover:text-textGreen duration-300'
                     href="https://github.com/lavanyajagannath/Movie_website" target='_blank'>
                        <RxOpenInNewWindow />
                    </a>
                </div>
            </div>
            </div>
            
        </div>
    </section>
  )
}

export default Projects