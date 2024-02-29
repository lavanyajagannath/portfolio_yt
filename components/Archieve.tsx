import React, { useState } from 'react'
import ArchieveCard from './ArchieveCard';

const Archieve = () => {
    const [showMore, setShowMore] = useState(false);
  return (
    <div className='max-w-contentContainer mx-auto px-4 py-24'>
        <div className='w-full flex flex-col items-center'>
            <h2 className='text-3xl font-titleFont font-semibold'>Other Noteworthy Projects</h2>
            <p className='text-sm font-titleFont text-textGreen'>view the archieve</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10'>
            <ArchieveCard title="Next Gen Creativity Machine" des=""
            listItem={["HTML,CSS,Javascript"]} 
            link="https://zs17hn.csb.app/"/>
            <ArchieveCard title="Amazon Clone" des=""
            listItem={["HTML,CSS,Reactjs"]} 
            link="https://roaring-cuchufli-6c02c7.netlify.app/"/>
            <ArchieveCard title="Qr Scanner" des=""
            listItem={["HTML,CSS,Reactjs"]} 
            link="https://github.com/lavanyajagannath/qr-scanner"/>

        </div>
        
    </div>
  )
}

export default Archieve