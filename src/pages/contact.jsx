import React from 'react'
import {MdMarkEmailRead} from 'react-icons/md'
import {LuMessagesSquare} from 'react-icons/lu'
import { Link } from 'react-router-dom'
import '../contact.css'


export default function Contact() {
  return (
    <>
    <div className='mt-[96px] bg-[#101e4a] flex justify-between h-auto sec-1'>
     
        <div className='flex flex-col space-y-4 w-[45%] sm:p-8 lg:pt-24 lg:pb-24'>
          <h2 className='text-white font-semibold text-3xl font-mono mt-4 lg:text-4xl'>
            Get In Touch
          </h2>
          <span className='text-xs mb-4 text-white font-medium'>Contact us with one of the means below, Our Customer care personnel are always eager and happy to help, Your seamless transaction and investment experience is our outmost priority</span>
        </div>
        
        <div className='side-img'>
          
        </div>
    </div>

      <main className='grid grid-cols-2 gap-6 mt-0'>

        <div className='bg-white p-2 shadow-sm shadow-black flex flex-col justify-center items-center'>

          <LuMessagesSquare className='text-4xl mb-8 text-slate-900'/>

          <h3 className='font-mono font-bold text-xl mb-8 text-slate-900'>Chat Admin</h3>

          <p className='text-sm leading-6 italic font-semibold bg-slate-900 p-6 text-white mb-8'>Interested in investing with us but don't know how?  click the button to chat with our customer care personnel</p>

          <Link to="" className='bg-[#ccc] rounded-sm shadow-sm shadow-black p-3 font-bold font-mono text-lg hover:bg-slate-900 hover:text-white transition-all duration-300 hover:opacity-100'>Customer Care</Link>

        </div>

        <div className='flex flex-col justify-center items-center bg-white shadow-black shadow-sm p-2'>
          
          <MdMarkEmailRead className='text-4xl mb-8 text-slate-900'/>

          <h3 className='mb-8 font-bold font-mono text-xl text-slate-900'>Send us a Mail</h3>

          <p className='bg-slate-900 text-white text-sm font-semibold leading-6  p-3 italic mb-8'>Nobody is perfect and no platform is without flaws, Is there something you are not satisfied with? Tell us about it, Click the button below to send us a mail today</p>

          <Link to="" className='bg-[#ccc] rounded-sm shadow-sm shadow-black p-3 font-bold font-mono text-lg hover:bg-slate-900 hover:text-white transition-all duration-300 hover:opacity-100' >Send Mail</Link>
          
        </div>

      </main>
    
    </>
  )
}
