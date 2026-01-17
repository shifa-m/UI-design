import React from 'react'
import Navbar from './Navbar'
import Page1contect from './page1contect'


const Section1 = (props) => {
  return (
    <div className='h-screen w-full '>
      
      <Navbar/>
      <Page1contect user={props.user}/>
    </div>
  )
}

export default Section1
