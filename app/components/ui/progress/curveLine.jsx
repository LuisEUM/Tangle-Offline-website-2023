'use client'

import './styles.css'
import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'

function Item () {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start']
  })

  return (
    <section className='mb-16'>
      <motion.div ref={ref} className='flex'>
        <motion.figure initial='hidden' animate='visible' className='progress curve'>
          <svg width='42' height='150' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              className='bg curve'
              pathLength='1'
              d='M43 20C43 20 20 20 20 41C20 61 20 120.667 20 900'
              stroke='#D90026'
              stroke-width='2px'
              style={{ pathLength: scrollYProgress }}
            />
            <motion.path
              whileInView={{ pathLength: scrollYProgress }}
              d='M43 20C43 20 20 20 20 41C20 61 20 120.667 20 900'
              stroke='#D90026'
              stroke-width='2px'
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
        </motion.figure>
      </motion.div>
    </section>
  )
}

export default function CurvelLine () {
  return (
    <>
      <Item />
    </>
  )
}