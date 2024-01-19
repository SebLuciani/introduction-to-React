import React from 'react'

let standardSrc = "https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

function Card({description="This is a normal photo", source = standardSrc}) {
  return (
    <div>
        <img src={source} alt=''></img>
        <h1 className='text-2xl bg-green-500 p-3 rounded'>{description}</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, alias.</p>

    </div>
  )
}

export default Card