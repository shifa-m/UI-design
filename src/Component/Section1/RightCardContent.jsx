import React from 'react'


const RightCardContent = (props) => {

  console.log(props.color)
  return (
    
             <div className='absolute top-0 left-0 h-full  p-8 flex flex-col justify-between'>
                                                <h2 className='bg-white text-xl font-medium rounded-full h-12 w-12 flex justify-center items-center'>{props.id+1}</h2>
                                                <div >
                                                            <p className='text-xl leading-relaxed text-white mb-10 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur debitis est aperiam placeat, quisquam neque?</p>
                                                            <div className='flex justify-between'>
                                                                        <button style={{backgroundColor:props.color}} className='bg-blue-600 text-white rounded-full px-7 py-2'>Sucessfull</button>
                                                                       
                                                                        <button className='bg-blue-600 text-white rounded-full px-4 py-2'>Arrow</button>
                                                                       
                                                            </div>
                                                </div>
                                                <div/>
                                                </div>
    
  )
}

export default RightCardContent