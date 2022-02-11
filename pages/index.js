import { useState } from 'react';
import { ArrowDownIcon } from '@heroicons/react/solid'

export default function Home() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const renderDownloadResumeButton = () => (
    <a 
    className="flex items-center w-32 text-xl font-light border border-gray-600 rounded-sm lg:text-2xl hover:bg-pink-600 hover:border-0 hover:text-white"
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
      setSubmitted(true)
      setName('')
      setEmail('')
      // setBody('')
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

        <div className="sm:pt-4">
          <button className="self-center w-48 p-2 text-white bg-gray-400 rounded-sm hover:bg-pink-600"
          type="submit"
          >
            Send
          </button>
        </div>
        
      </form>
    </div>
  )
  
  return (
    <>
    <div className='flex flex-col md:flex-row'>
      
      <img src={'cover.png'} className='w-full md:w-1/2 md:max-h-96 max-w-48'/>
      <div className="flex flex-col justify-between px-4 mt-4 space-y-4 text-gray-600 md:mt-0">
        <p className="text-xl font-light text-left lg:text-2xl">
        Hi There! I am a journalist based in Istanbul.
        I have an MA in South Asian Area Studies from the University of Oxford.
        My publications focus on Animal conservation, contemporary politics, labor laws, women's rights and venture capital in developing economies. 
        </p>

        {renderDownloadResumeButton()}
      </div>
      
    </div>
    {renderContactForm()}
    </>
  )
}

