import React, { useState } from 'react'
import SectionTitle from './SectionTitle'
import Houzbay from './works/Houzbay'
import Unibrain from './works/Unibrain'
import Testyantra from './works/Testyantra'

const Experience = () => {
  const [workHouzbay, setWorkHouzbay] = useState(true);
  const [workUnibrain, setWorkUnibrain] = useState(false);
  const [workTestyantra, setWorkTestyantra] = useState(false);

  const handleHouzbay = () => {
    setWorkHouzbay(true);
    setWorkUnibrain(false);
    setWorkTestyantra(false);
  };

  const handleUnibrain = () => {
    setWorkHouzbay(false);
    setWorkUnibrain(true);
    setWorkTestyantra(false);
  };

  const handleTestyantra = () => {
    setWorkHouzbay(false);
    setWorkUnibrain(false);
    setWorkTestyantra(true);
  }

  return (
    <section id='experience' className='max-w-containerxs mx-auto py-10 lgl:py-24 px-4 lg:px-8 md:px-16 xl:px-32'>
      <SectionTitle title="Where I have Worked" titleNo="02" />
      <div className='w-full mt-10 flex flex-col md:flex-row gap-16'>
        <ul className='md:w-32 flex flex-col'>
          <li onClick={ handleHouzbay } className={`${
            workHouzbay ? "border-textGreen text-textGreen" : "border-l-hoverColor text-textDark"} border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>Houzbay</li>
          <li onClick={ handleUnibrain } className={`${
            workUnibrain ? "border-textGreen text-textGreen" : "border-l-hoverColor text-textDark"} border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>Unibrain Softech</li>
          <li onClick={ handleTestyantra } className={`${
            workTestyantra ? "border-textGreen text-textGreen" : "border-l-hoverColor text-textDark"} border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>Test Yantra</li>
        </ul>
        <div className='flex-grow'>
          {workHouzbay && <Houzbay />}
          {workUnibrain && <Unibrain />}
          {workTestyantra && <Testyantra />}
        </div>
      </div>
    </section>
  )
}

export default Experience
