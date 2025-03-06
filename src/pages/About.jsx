import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <Link to="/" className='capitalize font-light  text-center'>📱 Get App</Link> | 
        <Link to="/" className='capitalize font-light  text-center'>🕸 visit Store</Link>
    </div>
  )
}

export default About
