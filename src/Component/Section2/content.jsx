import React from 'react'

const Content = () => {
  function btnonclick () {
    console.log("More information");
  }
  return (
    <div>
     <div className='px-[10%] flex justify-between rounded-4xl'>
      <img className="h-125 
       w-auto object-cover rounded-4xl " src="https://i.pinimg.com/736x/b2/da/f9/b2daf9019c4b08fa3a90c7d28a08a059.jpg" alt="" />
       <img className="h-125
        w-auto object-cover rounded-4xl" src="https://i.pinimg.com/736x/b8/1a/56/b81a56194737daea65b4aafa57aa4ed0.jpg" alt="" />
        <img className="h-125
         w-auto object-cover rounded-4xl" src="https://i.pinimg.com/736x/a3/ae/ac/a3aeac1628cd4e9b4ead5dc43864e813.jpg" alt="" />
        
         
     </div>
     <div>
      <button onClick={btnonclick} className= ' bg-gray-400 text-black font-medium mx-220 my-10  px-4 py-2 '>More Details</button>
     </div>
    </div>
  )
}

export default Content
