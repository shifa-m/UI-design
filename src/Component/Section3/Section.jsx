import React from 'react'
import Right from './Right'
import Left from './Left'

const Section3 = () => {
  return (
    <div className='bg-blue-300 h-screen w-full'>
            <div className='pb- pt-4   flex items-center gap-10 justify-between h-[90vh] '>
                         <Right/>
      <Left/>
            </div>
     
    </div>
  )
}

export default Section3
