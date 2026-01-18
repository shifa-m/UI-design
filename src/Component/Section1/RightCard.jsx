
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
            console.log(props.color);

            return (
                        <div className='h-300px shrink-0  overflow-hidden relative w-90  rounded-4xl  '>
                                    <img className='h-full w-full object-cover' src={props.img}
                                    // "https://i.pinimg.com/736x/09/63/03/09630372b8e6f94257d5c6b3d47f0560.jpg"
                                     alt="My photo" />
                                   
                                   
                                   <RightCardContent color={props.color} id={props.id} tag={props.tag} />

                                   
                                    </div>
                        
            )
}

export default RightCard