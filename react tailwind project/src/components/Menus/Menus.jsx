import React from 'react'
import Fruit1 from "../../assets/fruits/apple.png";
import Fruit2 from "../../assets/fruits/orange.png";
import Fruit3 from "../../assets/fruits/avocado.png";
import Fruit4 from "../../assets/fruits/cherry.png";
import { motion} from "framer-motion";
import {FadeLeft} from "../../utility/animation";

const Menusdata = [
    {
        id:1,
        title: "Fresh Red Apple",
        link: "/",
        price: "$2.00",
        img: Fruit1,
        delay: 0.3,
    },
    {
        id:2,
        title: "Fresh Orange",
        link: "/",
        price: "$4.99",
        img: Fruit2,
        delay: 0.6,
    },
    {
        id:3,
        title: "Fresh Avocado",
        link: "/",
        price: "$5.99",
        img: Fruit3,
        delay: 0.9,
    },
    {
        id:4,
        title: "Fresh cherries",
        link: "/",
        price: "$2.99",
        img: Fruit4,
        delay: 1.2,
    }
]

function Menus() {
  return (
    <section>
      <motion.div
      initial ={{ opacity:0, x: -200}}
      whileInView={{ opacity: 1, x: 0}}
      transition ={{ duration: 1, delay: 0.3}}
      className="container pt-12 pb-20">
        <h1 className='text-2xl font-bold text-left pb-10 uppercase'>Our Menu</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 '>
           {
            Menusdata.map((menu)=>(
              <motion.div 
              variants={FadeLeft(menu.delay)}
              initial = "hidden"
              whileInView={"visible"}
              whileHover={{scale: 1.1}}
              className='bg-white rounded-3xl px-4 py-2 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex flex-row justify-around items-center gap-3'>
                <img src={menu.img} alt="" className='w-[60px] mb-4 scale-125 transform-translate-y-6' />
                <div>
                  <h1 className='text-lg font-semibold' >{menu.title}</h1>
                  <p className='text-lg font-semibold text-secondary'>{menu.price}</p>
                </div>
              </motion.div>
            ))
           }
        </div>
      </motion.div>
    </section>
  )
}

export default Menus
