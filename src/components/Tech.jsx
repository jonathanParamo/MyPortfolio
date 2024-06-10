import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <div className='hidden lg:block'>
            <BallCanvas icon={technology.icon} />
          </div>

          <div className='border-4 border-purple-700 rounded-full p-1 lg:hidden'>
            <img src={technology.icon} alt='icon' className='rounded-full' />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
