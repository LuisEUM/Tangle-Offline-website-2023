'use client'
import { Ellipse } from '../ui/svg/elipse'
import { motion } from 'framer-motion'
import VerticalLine from '../ui/progress/verticalLine'
import WordsAnimation from '../ui/animation/wordsAnimation'
import { useEffect, useState } from 'react'
import VideoPlayer from '../video-player/VideoPlayer'
import SectionAnimation from '../ui/animation/sectionsAnimation'

export default function SectionThree () {
  const wordArray = ['Clubbling', 'Bowling', 'Cafe', 'Restaurant', 'Boat', 'Tour']
  const [first, setfirst] = useState(wordArray[0])

  useEffect(() => {
    let count = 0
    setInterval(() => {
      if (wordArray.length <= count) {
        count = 0
      }

      setfirst(wordArray[count])
      count++
      console.log(first, wordArray.length, count)
    }, 3000)

    // return clearInterval(wordCounter)
  }, [])

  return (
    <>
      <div className='relative  '>
        <SectionAnimation>
          <VideoPlayer />
        </SectionAnimation>

        <div className='px-2 md:px-14 lg:px-32 w-full'>
          <motion.div className='  '>
            <div>
              <div className='flex gap-12'>
                <div className='bg- flex justify-center content-center  align-middle relative h-[350px]'>
                  <div className='bg- flex justify-center content-center  align-middle gap-6'>
                    <div className=' flex h-[63px]  bg-tangle-rich-black-FOGBRA-29 rounded-full  px-5 py-10 self-start mt-10' style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(13, 17, 28, 1) 85%, rgba(13, 17, 28, 0.6) 100%)' }}>
                      <Ellipse icon='heart' className='h-16 p-12 my-5 max-w-[30px] ' color='rgba(255,0,0,0.4)' />
                    </div>
                    <div className='bg-red- py-5'>
                      <div className='flex flex-col mt-10 align-middle content-top justify-top '>
                        <motion.div className='max-w-full'>
                          <WordsAnimation className='text-base sm:text-lg md:text-xl lg:text-2xl font-title' text='Problem' tag='h4' />
                        </motion.div>
                        <motion.div className='max-w-full pr-2'>
                          <WordsAnimation className='text-base sm:text-lg md:text-xl lg:text-2xl font-body ' text='Find people to hang out with, have social interactions, think creatively, and build strong communication skills. Do all of this, and more, on Tangle, by joining events and taking part in activities happening all around your city.' tag='p' />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                  <div className='bg-yellow- flex absolute -z-30 left-5 top-0'>
                    <VerticalLine color='red' width={42} heigth={350} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
