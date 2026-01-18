import React from 'react'
import Section1 from './Component/Section1/Section1'
import Section2 from './Component/Section2/Section2'
import Section3 from './Component/Section3/Section'
import Content from './Component/Section2/content'


const App = () => {

  const users=[
    {
      img:'https://i.pinimg.com/736x/25/f6/6e/25f66e08ee01e563086bb5723b40ae1b.jpg',
      intro:'',
        color:'red',
      tag:'Satiesfied'
    },
    {
      img:'https://i.pinimg.com/1200x/18/79/73/1879732a4edf5c5c776277a175a8e433.jpg',
      intro:'',
      color:'orange',
      tag:'Underbanked'
    },
    {
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
       color:'lightseagreen',
      tag:'Underserved'
    },

    {
      img:'https://i.pinimg.com/736x/c5/3d/87/c53d874b4d7662ace85677f754e7840e.jpg',
      intro:'',
      color:'orange',
      tag:'Underbanked'
    },
     {
      img:'https://i.pinimg.com/736x/b7/95/a8/b795a80b5c51cd3801cb34d61aa81294.jpg',
      intro:'',
      color:'green',
      tag:'Average'
    },
      {
      img:'https://i.pinimg.com/736x/bb/3c/b2/bb3cb21e3bd8414c73b789aeab2cb1f6.jpg',
      intro:'',
      color:'lightblue',
      tag:'Average'
    },
  ]
    
  
  return (
   <div>
    <Section1 users={users} />
    <Section2/>
    <Section3/>
    
   </div>
      
    
  )
}

export default App
