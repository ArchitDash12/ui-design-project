import React from 'react'
import Navbar from './Navbar'
import Centre from './Centre'

const Section1 = (props) => {


  return (
    <div className='h-screen w-full'>
        <Navbar />
        <Centre users={props.users} />
    </div>
  )
}

export default Section1