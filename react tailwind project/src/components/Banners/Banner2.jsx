import React from 'react'
import Bannerpng from "../../assets/fruit-plate2.png";
import {motion} from "framer-motion";
import {FadeUp} from "../../utility/animation";

function Banner2() {
  return (
    <section className=''>
        <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 md:py-24">
     
    {/* Brand Info */}
    <div className='flex flex-col justify-center'>
        <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
            <motion.h1 
            variants={FadeUp(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{once:true}}

            className='text-3xl lg:text-6xl font-bold'> Online Fruits Store</motion.h1>
            <motion.p
            variants={FadeUp(0.7)}
            initial="hidden"
            whileInView="visible"
            viewport={{once:true}}
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat soluta facilis rerum officiis magni. Eligendi a esse error, blanditiis at iure asperiores soluta sit aliquam eum quas facere veniam porro.</motion.p>
            <motion.p
            variants={FadeUp(0.9)}
            initial="hidden"
            whileInView="visible"
            viewport={{once:true}}
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, vero delectus. Impedit veritatis necessitatibus totam.</motion.p>
            {/* button section */}
            <motion.div 
            variants={FadeUp(1.1)}
            initial= "hidden"
            animate="visible"
            className='flex justify-center md:justify-start'>
                <button className='primary-btn'>Download the App</button>
            </motion.div>
        </div>
    </div>
     {/* Banner Img */}
     <div className='flex-justify-center items-center  '>
        <motion.img
        initial = {{ opacity:0, x: 200, rotate:75}}
        whileInView={{opacity: 1, x: 0, rotate: 0}}
        transition = {{ duration: 1, delay:0.2}}
        viewport={{ once: true}}

        src={Bannerpng} alt="" className='w-[350px] md:max-w-[500px] h-full object-cover drop-shadow '/>
      </div>
       </div>
    </section>
  )
}

export default Banner2