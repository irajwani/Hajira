import { useState } from 'react';
import { ArrowDownIcon } from '@heroicons/react/solid'
import about from '../text/about';

export default function Home() {

  const [showMore, toggleShowMore] = useState(false)

  const renderAbout = () => (
    <div>
      <p className={`text-xl font-light text-left ${!showMore && 'line-clamp-3'} lg:text-2xl`}>
        {about}
      </p>
      <span>
        <a className="font-light cursor-pointer text-brown" onClick={() => toggleShowMore(!showMore)}>
          {showMore ? 'Show less' : 'Read more'}
        </a>
      </span>
    </div>
  )
  
  const renderDownloadResumeButton = () => (
    <a 
    className="flex items-center w-32 text-xl font-light border border-gray-800 rounded-sm lg:text-2xl hover:bg-brown hover:text-white"
    href="/cv.pdf"
    alt="download resume button"
    target="_blank"
    rel="noopener noreferrer"
    >
      <ArrowDownIcon className="w-4 h-4 mx-2"/>
      Résumé
    </a>
  )
  
  const handleSubmit = async event => { 
    event.preventDefault();
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        email: event.target.email.value, 
        name: event.target.name.value,
        message: event.target.message.value 
      })
    })
    
    console.log('Response received')
    if (res.status === 200) {
      console.log('Response succeeded!')
    }
    
  }

  const renderContactForm = () => (
    <div className='flex flex-col mt-8 space-y-2'>
      <span className='text-s'>Want to work together? Drop me a message and I'll be in touch.</span>
      <form className="flex flex-col space-y-4 sm:flex-row sm:flex-wrap sm:space-y-0" onSubmit={handleSubmit}>
        
        <div>
          <input
          className="w-full mr-4 sm:w-48 md:w-64"
          placeholder="Email" id="email" name="email" type="email" autoComplete="email" required/>
        </div>

        <div>
          <input
          className="w-full sm:w-48 md:w-64"
          placeholder="Full Name" id="name" name="name" type="text" autoComplete="name" required/>
        </div>

        <div className="w-full">
          <textarea 
          className="w-full h-48 sm:mt-4 md:w-1/2"
          placeholder="Message" id="message" name="message" required/>
        </div>

        <div className="flex flex-row space-x-8 sm:pt-4">
          <button className="self-center w-48 p-2 text-xl font-light border border-gray-800 rounded-sm hover:bg-brown hover:text-white"
          type="submit"
          >
            Send
          </button>

          {renderDownloadResumeButton()}
        </div>
        
      </form>
    </div>
  )
  
  return (
    <>
    <div className='flex flex-col'>
      
      <img src={'cover.jpg'} className='w-full rounded-lg md:w-1/2 lg:w-1/3 max-w-48'/>
      <div className="flex flex-col justify-between mt-4 space-y-4 text-gray-800">
        {renderAbout()}
      </div>
      
    </div>
    {renderContactForm()}
    </>
  )
}
