import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin,FaTwitter,FaGithub } from 'react-icons/fa'

const BoredToo = () => {
  return (
    <div className='flex flex-col flex-center items-center'>
      <h1 className='text-3xl lg:text-4xl xl:text-5xl mb-4 font-bold mx-auto text-center'>Hey, I'm bored too!</h1>
      <p className='mb-4 text-center'>That's why I made this app.</p>

      <div className='grid grid-cols-3 gap-4'>
        <a href='https://www.linkedin.com/in/geramr/'>
          <FaLinkedin className='fill-primary text-3xl' />
        </a>
        <a href='https://twitter.com/geramrico'>
          <FaTwitter className='fill-primary text-3xl' />
        </a>
        <a href='https://github.com/geramrico'>
          <FaGithub className='fill-primary text-3xl' />
        </a>
      </div>
      <h3 className='text-xs mt-2'>Follow me!</h3>

      <Link to='/' className='mx-auto mt-4'>
        <button className='btn btn-outline'>Go back home</button>
      </Link>
    </div>
  )
}

export default BoredToo
