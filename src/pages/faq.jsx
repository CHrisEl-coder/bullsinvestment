import React from 'react'

import { Link } from 'react-router-dom'

export default function Faq() {
  return (
    <>
    <section className='mt-[120px] mt mb-5 space-y-2 '>
      <div className='flex justify-center py-6 bg-[#ccc]'>
        <span className='text-slate-900 text-3xl font-bold'>Frequently Asked Questions (FAQs)</span>
      </div>

     <div>
      <h1 className='pl-6 font-extrabold text-xl text-slate-900 font-mono '>How To Buy Bitcoin ?</h1>
      <p className='text-xs indent-6 font-semibold italic'>They are various platforms that offer the buy and sell of <strong className='text-lg text-red-950'>Bitcoin</strong> and other forms of crypto currencies, Some of these platforms include <Link to="www.binance.com" className='text-lg hover:text-slate-950 font-bold transition-all duration-300'>Binance</Link>, <Link to="www.huobi.com" className='text-lg hover:text-slate-950 font-bold transition-all duration-300'>Huobi</Link>, <Link to="www.kucoin.com" className='text-lg hover:text-slate-950 font-bold transition-all duration-300'>Kucoin</Link>, and <Link to="www.luno.com" className='text-lg hover:text-slate-950 font-bold transition-all duration-300'>Luno</Link>.</p>
      <p className='mt-4 mb-4 font-semibold text-lg text-slate-900 pl-4'>Follow The Steps Below: 

        <ul className='text-black mt-3 pl-6'>
          <li className='list-disc text-xs italic mb-3'><strong className='text-sm font-bold font-mono not-italic'>Follow The Link:</strong> Click on one of the link above to get redirected to the site.</li>
          <li className='text-xs font-semibold italic list-disc mb-3'><strong className='text-sm not-italic font-bold font-mono'>Register:</strong> While on the site you will see the sign-up button click on the button to be redirected to the sign-up page, while on the sign-up page input your details and register to the site. </li>
          <li className='text-xs italic list-disc mb-3 font-semibold'><strong className='text-sm not-italic font-mono font-bold'>Fund Your Wallet:</strong> Once signed-up on the site you will get a custom wallet, fund your wallet to be able to purchase bitcoin, many platforms have different payment method, choose your preferred payment method and fund your wallet with a desired amount.</li>
          <li className='text-xs italic mb-3 list-disc font-semibold'><strong className='text-sm font-mono not-italic font-bold'>Buy Bitcoin :</strong> Once You are done funding your account on your dashboard you will see a prompt that asks you whether to buy or sell bitcoin click on the but bitcoin follow the prompt and purchase a desired amount of bitcoin.</li>
        </ul>
      </p>
     </div>

     <div>
      <h1 className='pl-6 font-extrabold text-xl text-slate-900 font-mono mt-8'>How To Fund My Account ?</h1>
        <ul className='pl-8'>
          <li className='list-disc text-xs font-semibold italic mt-4 mb-4'><strong className='font-mono font-extrabold text-sm not-italic '>Step 1:</strong> Click on the plan you want to invest in , you will automatically be redirected to the payment page, copy the bitcoin address and make payment, upload the payment receipt to through the designated portal your account will be funded in seconds. </li>
          <li className='list-disc text-xs font-semibold mb-4 italic'><strong className='font-mono text-sm font-bold not-italic'>Step 2:</strong> Alternatively, Contact The Customer Care To Guide you.</li>
         </ul>
     </div>
    </section>
    </>
  )
}
