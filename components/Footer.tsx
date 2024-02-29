import React from 'react'
import { TbBrandGithub } from 'react-icons/tb'
import { 
    SlSocialLinkedin,
    SlSocialInstagram,
} from "react-icons/sl";

const Footer = () => {
  return (
    <div className='hidden mdl:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4'>
        <div className="flex flex-col gap-4">
            <a href="https://github.com/lavanyajagannath" target="_blank">
            <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex
            items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300">
                <TbBrandGithub />
                </span>
            </a>
            <a href="https://www.linkedin.com/in/lavanya-j-a90b771b6/" target="_blank">
            <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex
            items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300">
                <SlSocialLinkedin />
                </span>
            </a>
            <a href="https://www.instagram.com/lavanya_jagannath_67/" target="_blank">
            <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex
            items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300">
                <SlSocialInstagram />
                </span>
            </a>
        </div>
    </div>
  )
}

export default Footer