import React, { useState } from 'react'

const User = (props) => {
    const [count,setcount] = useState(0);
    const [count2,setcount2] = useState(1);
  return (
    <div className='user-card'>
           <h2>Count:{count}</h2>
       <h2>Count2:{count2}</h2>
       <h2>Name: {props.name}</h2>
       <h3>Location: {props.location}</h3>    
    </div>
  )
}

export default User