import { profileImg } from "@/public/assets";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import Image from "next/image";

const About = () => {
  return <section id="about" className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8">
    <SectionTitle title="About Me" titleNo="01" />
    <div className="flex flex-col lgl:flex-row gap-16">
      <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
        <p>
          Hello! My name is Lavanya Jagannath and I enjoy creating things that live on the internet. My interest in web development started back in 2022 when I decided to try editing button taught me a lot about HTML & CSS!
        </p>
        <p>
          Fast-forward to today, and I had the privilege of working at an SaaS company, a start-up,
          <span className="text-textGreen">
            a huge government service, and a student-led design studio.
          </span>
          I am an ambitious and diligent professional with a robust background in engineering. My
journey has been marked by significant experiences at esteemed companies such as
          <span className="text-textGreen">
            Test
                 Yantra Software Solutions, Unibrain Softech Pvt Ltd, and Houzbay,
          </span>
        </p>
        <p>
        where I have honed my
technical skills. Eager to embrace the challenges of a reputable organization. I am on the
lookout for a role that allows me to dive into new technologies and leverage my expertise for
the mutual growth and success of the company.
        </p>
        <p>Here are a few technologies I have been working with:</p>
        <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
          <li className="flex items-center gap-2">
            <span className="text-textGreen">
              <AiFillThunderbolt />
              </span>
              HTML
              </li>
              <li className="flex items-center gap-2">
            <span className="text-textGreen">
              <AiFillThunderbolt />
              </span>
              CSS
              </li>
              <li className="flex items-center gap-2">
            <span className="text-textGreen">
              <AiFillThunderbolt />
              </span>
              JavaScript
              </li>
              <li className="flex items-center gap-2">
            <span className="text-textGreen">
              <AiFillThunderbolt />
              </span>
              JQuery
              </li>
            <li className="flex items-center gap-2">
            <span className="text-textGreen">
              <AiFillThunderbolt />
              </span>
              React.Js
              </li>
              <li className="flex items-center gap-2">
            <span className="text-textGreen">
              <AiFillThunderbolt />
              </span>
              Next.js
              </li>
              <li className="flex items-center gap-2">
            <span className="text-textGreen">
              <AiFillThunderbolt />
              </span>
              Tailwind CSS
              </li>
              <li className="flex items-center gap-2">
            <span className="text-textGreen">
              <AiFillThunderbolt />
              </span>
              Bootstrap
              </li>
              <li className="flex items-center gap-2">
            <span className="text-textGreen">
              <AiFillThunderbolt />
              </span>
              SQL
              </li>
        </ul>
      </div>
      <div className="w-full lgl:w-1/3 h-80 relative group">
      <div className="absolute w-full h-full -left-6 -top-6 rounded-lg overflow-hidden">
          <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
            <Image className="rounded-lg h-full object-cover"
            src={profileImg}
            alt="profileImg" />
            <div className="hidden lg:inline-block absolute w-full h-full rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  </section>
}

export default About