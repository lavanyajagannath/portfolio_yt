import Image from 'next/image';
import { useRef, useState } from 'react';
import Logo  from "@/public/assets/images/logo.png";
import Link from 'next/link';
import { MdOutlineClose } from 'react-icons/md';
import { TbBrandGithub  } from 'react-icons/tb';
import { SlSocialLinkedin, SlSocialInstagram } from 'react-icons/sl';

const Navbar = () => {
    const ref = useRef<string | any>("");
    const [showMenu, setShowMenu] = useState(false); 
    const handleScroll = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setShowMenu(false);
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
        behavior: "smooth",
    });
    //update the class name of the clicked link
    const links = document.querySelectorAll(".nav-link")
    links.forEach((link)=>{
       link.classList.remove("active") 
    });
    e.currentTarget.classList.add("active");
    }; 

    function handleClick(e:any){
        if(e.target.contains(ref.current)){
            //do something with myRef.current
            setShowMenu(false);
        }
    }
  return (
    <div className='w-full shadow-navbarShadow h-20 lg:h-[12vh] fixed  z-50 bg-bodyColor px-4'>
        <div className='w-full container mx-auto h-full py-1 px-8 font-titleFont mt-5'>
           <div className='flex flex-row justify-between align-center'>

            <div>
                <Image className='w-10 pt-0'  src={Logo} alt="Logo" />
            </div>
            <div className='hidden mdl:inline-flex items-center gap-7'>
                <ul className='flex text[13px] gap-7'>
                    <Link href="#home"
                    className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
                    <li>Home</li>
                    </Link>
                    <Link onClick={handleScroll} href="#about"
                    className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
                    <span>01.</span> About
                    </Link>
                    <Link onClick={handleScroll} href="#experience"
                    className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
                    <span>02.</span>
                    Experience
                    </Link>
                    <Link onClick={handleScroll} href="#project"
                    className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
                    <span>03.</span>
                    Project
                    </Link>
                    <Link onClick={handleScroll} href="#contact"
                    className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
                    <span>04.</span>
                    Contact
                    </Link>
                </ul>
                <a href='/assets/lavanya-new resume-2024.pdf' target='_blank' download="true">
                <button className='px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300'>Resume</button>
                </a>
            </div>
            {/* Small Icon Section */}
            <div onClick={()=>setShowMenu(true)} className='w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group'>
                <span className='w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300'></span>
                <span className='w-full h-[2px] bg-textGreen inline-flex transform
                translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300'></span>
                <span className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300'></span>
            </div>
            {
              showMenu && (
                <div ref={(node) => (ref.current = node)}
                onClick={handleClick} 
                className='absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end'>
                    <div
                    className='w-[80%] h-full overflow-y-scroll scrollbarHide bg-[#112240] flex flex-col items-center px-4 py-10 relative'>
                        <MdOutlineClose onClick={()=>setShowMenu(false)} className='text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4' />
                        <div className='flex flex-col items-center gap-7'>
                            <ul className='flex flex-col text-base gap-7'>
                            <Link href="#home"
                    className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
                    <li>Home</li>
                    </Link>
                    <Link onClick={handleScroll} href="#about"
                    className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
                    <span>01.</span> About
                    </Link>
                    <Link onClick={handleScroll} href="#experience"
                    className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
                    <span>02.</span>
                    Experience
                    </Link>
                    <Link onClick={handleScroll} href="#project"
                    className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
                    <span>03.</span>
                    Project
                    </Link>
                    <Link onClick={handleScroll} href="#contact"
                    className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
                    <span>04.</span>
                    Contact
                    </Link>
                            </ul>
                            <a href='/assets/lavanya-new resume-2024.pdf' target='_blank' download="true">
                <button className='px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300'>Resume</button>
                </a>
                <div className='flex gap-4'>
                </div>
                <a href="mailto:lavanya.109998@gmail.com">
                    <p>reactbd@proton.me</p>
                </a>
                <div>
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
                    </div>
                </div>
              )  
            }
           </div>
        </div>
    </div>
        
    
  )
}

export default Navbar