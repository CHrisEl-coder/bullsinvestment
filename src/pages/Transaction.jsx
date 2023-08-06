import React from 'react'
import '../transaction.css'
import { AiOutlineCopy } from 'react-icons/ai'

export default function Transaction() {

    const wallet = document.getElementById('wallet')

    function onClick (e) {
        e.preventDefault()

        wallet.select();
        wallet.setSelectionRange(0, 9999);


        navigator.clipboard.writeText(wallet.value)

        alert('Wallet Has Been Copied')

    }
  return (
    <>
      <div className='mt-[110px]'>
            <h1 className='text-center font-bold text-4xl bg-[#ccc] p-7 mx-4 text-slate-800'>Fund Your Investment Account </h1>
            <div className='f-div flex justify-center items-center flex-col w-[calc(100%-20px)] space-y-4 p-2'>
                <div>
                    <label>
                        Basic Package
                        <br/>
                        <select>
                            <option>Select Amount</option>
                            <option>$ 20</option>
                            <option>$ 40</option>
                            <option>$ 60</option>
                            <option>$ 80</option>
                            <option>$ 100</option>
                            <option>$ 120</option>
                            <option>$ 140</option>
                            <option>$ 160</option>
                            <option>$ 180</option>
                            <option>$ 200</option>
                            <option>$ 220</option>
                            <option>$ 240</option>
                            <option>$ 260</option>
                            <option>$ 280</option>
                            <option>$ 300</option>
                            <option>$ 320</option>
                            <option>$ 340</option>
                            <option>$ 360</option>
                            <option>$ 380</option>
                            <option>$ 400</option>
                        </select>
                    </label>   

                    
                    <form action='mailto:bullsinvestment261@gmail.com'>
                            <label className='flex space-x-4 text-lg'>Copy Wallet:
                                <input type='text' id='wallet' value='bc1q6x5aj8tt0t57yjnxfzf73wy9r3w26mn64ymxm3' />
                                <AiOutlineCopy onClick={onClick}/>
                            </label>
                            <input type='file' placeholder='Upload Receipt Of Transaction' />
                            <input type='submit' value='Upload' className='submit'/>
                     </form>
                </div>
                
                <div>

                    <label>
                        Basic Plan 2
                        <br/>
                        <select>
                            <option>Select Amount</option>
                            <option>$ 400</option>
                            <option>$ 500</option>
                            <option>$ 600</option>
                            <option>$ 700</option>
                            <option>$ 800</option>
                            <option>$ 900</option>
                            <option>$ 1000</option>
                        </select>
                    </label> 

                    
                    <form action='mailto:bullsinvestment261@gmail.com'>
                            <label className='flex space-x-4 text-lg'>Copy Wallet:
                                <input type='text' id='wallet' value='bc1q6x5aj8tt0t57yjnxfzf73wy9r3w26mn64ymxm3' />
                                <AiOutlineCopy onClick={onClick}/>
                            </label>
                            <input type='file' placeholder='Upload Receipt Of Transaction' />
                            <input type='submit' value='Upload' className='submit'/>
                    </form>

                </div>
            
                
                <div>

                    <label>
                        Professional Plan 1
                        <br/>
                        <select>
                            <option> Select Amount</option>
                            <option>$ 1100</option>
                            <option>$ 1200</option>
                            <option>$ 1300</option>
                            <option>$ 1400</option>
                            <option>$ 1500</option>
                            <option>$ 1600</option>
                            <option>$ 1700</option>
                            <option>$ 1800</option>
                            <option>$ 1900</option>
                            <option>$ 2000</option>
                            
                        </select>
                    </label>

                    
                    <form action='mailto:bullsinvestment261@gmail.com'>
                            <label className='flex space-x-4 text-lg'>Copy Wallet:
                                <input type='text' id='wallet' value='bc1q6x5aj8tt0t57yjnxfzf73wy9r3w26mn64ymxm3' />
                                <AiOutlineCopy onClick={onClick}/>
                            </label>
                            <input type='file' placeholder='Upload Receipt Of Transaction' />
                            <input type='submit' value='Upload' className='submit'/>
                    </form>

    
                </div>

                <div>

                    <label>
                        Professional Plan 2<br/>
                        <select>
                            <option>Select Amount</option>
                            <option>$ 2100</option>
                            <option>$ 2200</option>
                            <option>$ 2300</option>
                            <option>$ 2400</option>
                            <option>$ 2500</option>
                            <option>$ 2600</option>
                            <option>$ 2700</option>
                            <option>$ 2800</option>
                            <option>$ 2900</option>
                            <option>$ 3000</option>
                            <option>$ 3100</option>
                            <option>$ 3200</option>
                            <option>$ 3300</option>
                            <option>$ 3400</option>
                            <option>$ 3500</option>
                            <option>$ 3600</option>
                            <option>$ 3700</option>
                            <option>$ 3800</option>
                            <option>$ 3900</option>
                            <option>$ 4000</option>
                        </select>
                    </label>

                    
                    <form action='mailto:bullsinvestment261@gmail.com'>
                            <label className='flex space-x-4 text-lg'>Copy Wallet:
                                <input type='text' id='wallet' value='bc1q6x5aj8tt0t57yjnxfzf73wy9r3w26mn64ymxm3' />
                                <AiOutlineCopy onClick={onClick}/>
                            </label>
                            <input type='file' placeholder='Upload Receipt Of Transaction' />
                            <input type='submit' value='Upload' className='submit'/>
                    </form>
        
                </div>

                <div>
                    <label>
                        Corporate Plan 1
                        <br/>
                        <select>
                            <option> Select Amount</option>
                            <option>$ 4000</option>
                            <option>$ 5000</option>
                            <option>$ 6000</option>
                            <option>$ 7000</option>
                            <option>$ 8000</option>
                            <option>$ 9000</option>
                            <option>$ 10000</option>
                            
                        </select>
                    </label>

                        <form action='mailto:bullsinvestment261@gmail.com'>
                            <label className='flex space-x-4 text-lg'>Copy Wallet:
                                <input type='text' id='wallet' value='bc1q6x5aj8tt0t57yjnxfzf73wy9r3w26mn64ymxm3' />
                                <AiOutlineCopy onClick={onClick}/>
                            </label>
                            <input type='file' placeholder='Upload Receipt Of Transaction' />
                            <input type='submit' value='Upload' className='submit'/>
                        </form>

                </div>


                <div>
                    
                    <label>
                        Corporate Plan 2
                        <br/>
                        <select>
                            <option> Select Amount</option>
                            <option>$ 10000</option>
                            
                        </select>
                    </label>


                    <form action='mailto:bullsinvestment261@gmail.com'>
                        <label className='flex space-x-4 text-lg'>Copy Wallet:
                            <input type='text' id='wallet' value='bc1q6x5aj8tt0t57yjnxfzf73wy9r3w26mn64ymxm3' />
                            <AiOutlineCopy onClick={onClick}/>
                        </label>
                        <input type='file' placeholder='Upload Receipt Of Transaction' />
                        <input type='submit' value='Upload' className='submit'/>
                    </form>

                </div>
            
            
                
                




            </div>

        </div>
 </>     
)}