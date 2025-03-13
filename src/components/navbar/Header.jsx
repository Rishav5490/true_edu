import React from 'react'

const Header = () => {
  return (
    <>
    <div>
       <div className='bg-blue-900 text-white px-20 py-3'>
      <div className='flex justify-between items-center flex-wrap'>
      <h6 className='uppercase font-normal'>Create a brighter future by turning the pages of <u>Our books</u> and shape your tomorrow.</h6>
      <div>
      <Link to="/" className='capitalize font-light  text-center'>📱 Get App</Link> | 
      <Link to="/" className='capitalize font-light  text-center'>🕸 visit Store</Link>
      
      </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default Header
