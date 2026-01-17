import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
            return (
                        <div className='h-300px shrink-0  overflow-hidden relative w-90  rounded-4xl  '>
                                    <img className='h-full w-full object-cover' src={props.img} alt="My photo" />
                                   <RightCardContent tag={props.tag} />
                                    </div>
                        
            )
}

export default RightCard