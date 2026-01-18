import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Contect = (props) => {
  return (
    <div className='pb-20 pt-6  flex items-center gap-10 justify-between h-[90vh]'>
      <LeftContent/>
      <RightContent users={props.users}/>
    </div>
  )
}

export default Page1Contect
