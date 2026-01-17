import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1contect = (props) => {
  return (
    <div className='py-10 flex items-center gap-10 justify-between h-[90vh]'>
      <LeftContent/>
      <RightContent user={props.users}/>
    </div>
  )
}

export default Page1contect
