import React from 'react'
import {ArrowUpRight} from 'lucide-react'
import HeroText from './HeroText'

const LeftContent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3  '>
      <HeroText/>
      <div className='text-9xl'>
         <ArrowUpRight />
      </div>
     
    </div>
  )
}

export default LeftContent
