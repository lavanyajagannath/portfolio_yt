import React from 'react'

const Banner = () => {
  return <section id='home' className='max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4'>
    <h3 className='text-lg font-titleFont tracking-wide text-textGreen'>Hi, my name is</h3>
    <h1 className='text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col'>Lavanya Jagannath. <span className='text-textDark mt-2 lgl:mt-4'>I build things for the web.</span></h1>
    <p className='text-base md:max-w-[650px] text-textDark font-medium'>
        I am a web developer with 2 years of experience in React. I have a strong foundation in front-end development and am skilled in creating user-friendly and responsive web applications using React and its ecosystem.
    </p>
    <a href="https://github.com/lavanyajagannath">
    <button className='w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300'>Check out my Project!</button>
    </a>
  </section>
}

export default Banner