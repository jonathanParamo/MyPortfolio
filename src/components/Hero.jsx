import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { myPhoto } from "../assets";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] h-auto max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Jonathan</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop, user <br className='sm:block hidden' />
            interfaces and web applications
          </p>

          <div
            className='lg:hidden w-56 h-56 p-4 mt-8 relative rounded-full border-4 border-purple-700 box-border flex items-center justify-center'
          >
            <img src={myPhoto} alt="my_photo"
              className='w-40 h-40 object-contain rounded-3xl'
            />
          </div>
        </div>
      </div>

      <div className='w-full h-full hidden lg:block'>
        <ComputersCanvas />
      </div>

      <div className='absolute hidden lg:bottom-10 bottom-32 w-full lg:flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
