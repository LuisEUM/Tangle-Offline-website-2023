'use client'
import { Ellipse } from '../ui/svg/elipse'
import { motion } from 'framer-motion'
import VerticalLine from '../ui/progress/verticalLine'
import WordsAnimation from '../ui/animation/wordsAnimation'
import LettersAnimation from '../ui/animation/lettersAnimation'

export default function SectionTwelve () {
  return (
    <div className='px-2 md:px-14 lg:px-32 w-full'>
      <motion.div className='  '>
        <div>
          <div className='flex gap-12'>
            <div className='bg- flex justify-center content-center  align-middle relative h-[325px]'>
              <div className='bg- flex justify-center content-center  align-middle gap-6'>
                <div className=' flex h-[63px] ml-0.5 bg-tangle-rich-black-FOGBRA-29 rounded-full  px-5 py-10 self-start mt-10' style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(13, 17, 28, 1) 85%, rgba(13, 17, 28, 0.6) 100%)' }}>
                  <Ellipse icon='heart' className='h-16 p-12 my-5 max-w-[30px] ' />
                </div>
                <div className=' py-5'>
                  <div className='flex flex-col mt-10 align-middle content-top justify-top pr-10'>
                    <motion.div className='max-w-full pt-2'>
                      <WordsAnimation className='text-base sm:text-lg md:text-xl lg:text-2xl font-title' text='Tangle Offline is changing how people interact' tag='h4' />
                    </motion.div>
                    <motion.div className='max-w-full'>
                      <LettersAnimation className='py-2 text-3xl md:text-6xl lg:text-6xl font-bold ' text='We bring people out' tag='h3' />
                    </motion.div>
                  </div>
                </div>
              </div>
              <div className='bg-yellow- flex absolute -z-30 left-5 top-0'>
                <VerticalLine width={42} heigth={325} />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
