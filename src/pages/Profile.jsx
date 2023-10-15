import React from 'react'
import { FaBars, FaIgloo } from 'react-icons/fa'
import { TbPigMoney, TbReportMoney } from 'react-icons/tb'
import { GiMoneyStack, GiPayMoney, GiReceiveMoney } from 'react-icons/gi'
import { LuPackagePlus } from 'react-icons/lu'
import {BiLogOut} from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import { CiMoneyCheck1, CiWallet } from 'react-icons/ci'
import { MdCancel, MdDownloadDone, MdOutlineAutorenew } from 'react-icons/md'
import '../dash.css'
import { useState } from 'react'
import { getAuth } from 'firebase/auth'
import { doc, onSnapshot} from 'firebase/firestore'
import { db } from '../firebase'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import { AiOutlineCopy, AiOutlineInfoCircle } from 'react-icons/ai'
import emailjs from 'emailjs-com'


export default function Profile() {

  // Initializing firebase auth and useNavigate
  const auth = getAuth() 
  const navigate = useNavigate()

// Setting Up The Uid For Users 
  let uid = auth.currentUser.uid

 
  

  const [userData, setUserData] = useState({
    name: ''
  })
  const {name} = userData

  const [userInfo, setUserInfo] = useState({
    capital: '',
    transaction: '',
    earning: ''
  })

  
    useEffect(() => {
    var docSnap = onSnapshot(doc(db, 'BullsInvestment', uid), (doc) => {
      setUserInfo({
        capital: doc.data().Capital,
        earning: doc.data().Earning,
        transaction: doc.data().transaction
      })
      setUserData({
        name: auth.currentUser.displayName
      })
    }); 
    return docSnap
  }, [uid, name])

// setting up a state change for the side bar

const [isOpen, setIsOpen] = useState(false);


// Function For Copy to clipboard 

function copyToClipboard (e) {

  const wallet = document.getElementById('wallet')
  e.preventDefault()

  wallet.select();
  wallet.setSelectionRange(0, 9999);


  navigator.clipboard.writeText(wallet.value)

  alert('Wallet Has Been Copied')

}



// Setting Up Email Component and Withdtrawal Pop-up Tab

const userEmail = auth.currentUser.email;

var {capital, earning, transaction} = userInfo;

const [amount, setAmount] = useState('');

const [wallet, setWallet] = useState('');

const [placeholder, setPlaceholder] = useState('Your Wallet Address');

const [successfull, setSucessfull] = useState(false);



const message = `Your witdrawal of ${amount} to the bitcoin address: ${wallet} has been sent succesfully \n If you have any inquiry please contact customer support department with the receipt of transaction \n Thanks, \n BullsInvestment`;




// setting up the withdrawal submit 

function Withdraw(e) {
  e.preventDefault()
 

  const emailParams = {
    to_email: userEmail,
    message: message,
    to_name: name,
    from_name: 'Bullsinvestment.com'

  }

  if (wallet !== '' && amount > 1) {

    setSucessfull(true)

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICEID,
      process.env.REACT_APP_EMAILJS_TEMPLATEID,
      emailParams,
      process.env.REACT_APP_EMAILJS_USERID
    )

    .then(response => {
      toast (`Transaction Sucessfull ${response}`)
       
      var current = Number(earning) - Number(amount);

      earning = current 



      
    }).catch(error => {
      toast(`Transaction Unsuccessful ${error}`) 
    })
  } else {
    toast('Input Amount And Wallet Address')
  }


} 


// setting up the investment submit component

const [file, setFile] = useState(null);
const [depSuccessful, setDepSucessfull] = useState(false);
const [plan, setPlan] = useState('');

const Deposit = (e) => {
  e.preventDefault()
  if (file != null) {
    setDepSucessfull(true)
    const emailParams = {
      to_email: 'bullsinvestment261@gmail.com',
      message: 'deposit made !!',
      file: file
    };

    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICEID, process.env.REACT_APP_EMAILJS_TEMPLATEID2, emailParams, process.env.REACT_APP_EMAILJS_USERID).then(
      (response) => {
        toast ("Transaction Is Been Processed" + response)
      }
    ).catch((error) => {
      toast("Try Again" + error)
    })
  }
}


  

  function Investment() {

      if (capital !== 0) {
        toast(`You Have An Investment Fund Of ${earning}`)
      }else {
        toast("No Investment Yet")
      }
    } 

    function Transact() {

      if (transaction !== 0) {
        toast(` you made a transaction of $ ${capital}`)
      }else {
        toast("No Transaction Yet")
      }
    } 

    function Depo() {

      if (capital !== 0) {
        toast( `You Have A Capital Of ${capital}` )
      }else {
        toast("No Deposit Yet")
      }
    } 

  
  function onLogOut () {
    auth.signOut();
    toast("Logged Out")
    navigate("/");
  }

   // Auto Invest Function 

   function AutoInvest(e) {
      e.preventDefault()

      

      const emailParams = {
        to_name: name,
        to_email: userEmail
      }

      emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICEID,
        process.env.REACT_APP_EMAILJS_TEMPLATEID,
        emailParams,
        process.env.REACT_APP_EMAILJS_USERID
      )

      .then(() => {
        toast("Your Account Has Been Auto-Re-Invested")


        
      }).catch(error => {
        toast(`Transaction Unsuccessful ${error}`) 
    })

  }





  return (
    <div className='body'>
      <div className={isOpen ? "open" : "close"}>
        <div className='sidebar-brand'>
          
          {isOpen ? <span onClick={() => setIsOpen(!isOpen)} className='mnOpen'><MdCancel className='icon' size={25}/></span> : <FaBars className='bars' onClick={() => setIsOpen(!isOpen)}></FaBars>}

        </div>
        <div className='sidebar-menu'>
          <ul className={isOpen ? "" : "min"}>
            <li>
              {isOpen ? <Link to='' className='side-li activate'><FaIgloo></FaIgloo> <span>Dashboard</span></Link> : <FaIgloo className='active'/>}
            </li>
            <li>
              {isOpen ? <Link onClick={Investment} className='side-li'><TbPigMoney/> <span>Investment</span></Link> : <TbPigMoney onClick={Investment}/>}
            </li>
            <li>
              {isOpen ? <Link onClick={Depo} className='side-li'><GiPayMoney/> <span>Deposit</span></Link> : <GiPayMoney onClick={Depo}/>}
            </li>
            <li>
              {isOpen ? <Popup trigger={
                <Link className='side-li'><GiReceiveMoney/> <span>Withdraw</span></Link>
              } 
              modal nested>{
                close=> (
                <div className='modal'> 

                  {successfull ?  

                   <div className='success'>
                      <div className='div1'>
                        <MdDownloadDone size={60} className='done' color='white'/>
                        <span>Withdrawal Successfull</span>
                      </div>

                      <section>
                        <div>
                          
                          <span>User Id : </span>
                          <span>{uid}</span>
                        
                        </div>

                        <div>
                          
                          <span>Amount : </span>
                          <span>{amount}</span>
                        
                        </div>

                        <div>
                          
                          <span>Status : </span>
                          <span>Success</span>
                        
                        </div>
                      </section>
                      


                    </div>
                  : <div className='content'>

                      <select id='select' onChange={(e) => setPlaceholder(e.target.value)}>
                        <option value="Bank Transfer">Bank Transfer</option>
                        <option value="Wallet Payment">Wallet Payment</option>
                        <option value="Wire Pay">Wire Pay</option>
                      </select>

                    <form onSubmit={Withdraw}>

                       
                        <label>Amount: </label>
                        <span>
                          <span>$</span>
                          <input type='number' name='amount' id='amount' value={amount} onChange={(e) => setAmount(e.target.value)} max={capital} min={0} placeholder='Input Amount'/>
                        </span>
                        
                        <label>
                          Wallet Address :
                        </label>

                        <input type='text' placeholder={placeholder} name='wallet' id='wallet' onChange={(e) => setWallet(e.target.value)}/>
                        
                        <button type='submit'><GiReceiveMoney size={28}/>Withdraw</button>
                      </form>
                    </div> };

                    <MdCancel onClick={() => {
                      close()
                      setSucessfull(false)
                    }} className='mdClose' size={28}/>

                  </div>
                  
                  )
                  
              }
              </Popup> 
              
              : <Popup trigger={

                <GiReceiveMoney/>

              } 

              modal nested>{
                close=> (
                <div className='modal'>

                    {successfull ? 
                    
                    <div className='success'>
                      <div className='div1'>
                        <MdDownloadDone size={60} className='done' color='snow'/>
                        <span>Withdrawal Successfull</span>
                      </div>

                      <section>
                        <div>
                          
                          <span>User Id : </span>
                          <span>{uid}</span>
                        
                        </div>

                        <div>
                          
                          <span>Amount : </span>
                          <span>$ {amount}</span>
                        
                        </div>

                        <div>
                          
                          <span>Status : </span>
                          <span>Success</span>
                        
                        </div>
                      </section>
                      


                    </div>
                    
                    : <div className='content'>

                      <select id='select' onChange={(e) => setPlaceholder(e.target.value)}>
                        <option value="Bank Transfer">Bank Transfer</option>
                        <option value="Wallet Payment">Wallet Payment</option>
                        <option value="Wire Pay">Wire Pay</option>
                      </select>
                      
                      <form onSubmit={Withdraw}>

                       
                        <label>Amount: </label>
                        <span>
                          <span>$</span>
                          <input type='number' id='amount' name='amount' value={amount} onChange={(e) => setAmount(e.target.value)} max={capital} min={0} placeholder='Input Amount'/>
                        </span>
                        
                        <label>
                          Wallet Address :
                        </label>

                        <input type='text' placeholder={placeholder} name='wallet' id='wallet' onChange={(e) => setWallet(e.target.value)}/>
                        
                        <button type='submit' onClick={Withdraw}><GiReceiveMoney size={28}/>Withdraw</button>
                      </form>
                    </div> }

                    <MdCancel onClick={() => {
                      close()
                      setSucessfull(false)
                    }} className='mdClose' size={28}/>

                  </div>
                  
                  )
                  
              }
              </Popup>
              }
            </li>
            <li>
              {isOpen ? <Link onClick={Transact} className='side-li'><TbReportMoney/> <span>Transactions</span></Link> : <TbReportMoney onClick={Transact}/>}
            </li>
            <li onClick={onLogOut}>
              {isOpen ? <Link to="" className='side-li'><BiLogOut /> <span >Log-Out</span></Link> : <BiLogOut onClick={onLogOut}/>}
              
            </li>
          </ul>

          {isOpen ? <Popup trigger={
          <div className='Re-inv'> <MdOutlineAutorenew color='snow' size={36}/> Auto Re-Invest</div>
         } modal nested>
          {
            Re_Inv => (
              <div className='modal'>
                
                <div className='Reinv'>
                  <select name="Starter" id="starter" onChange={(e) => setPlan(e.target.value)}>
                    <option value="starterpack">Starter Pack</option>
                    <option value="standardpack">Standard Pack</option>
                    <option value="bronzepack">Bronze Pack</option>
                    <option value="silverpack">Silver Pack</option>
                    <option value="goldpack">Gold Pack</option>
                    <option value="diamondpack">Diamond Pack</option>
                  </select>

                  <input value={capital} type='number' />

                  <button onClick={AutoInvest}>Auto Invest</button>

                </div>

                <MdCancel onClick={() =>  Re_Inv()} size={28} className='cancel'/>
                  
              </div>

              
            )
          }
         </Popup> 

         : <Popup trigger={
             <MdOutlineAutorenew color='snow' size={36} className='Re-inv'/>
         } modal nested>
          {
            Re_Inv => (
              <div className='modal'>
                
                <div className='Reinv'>
                  <select name="Starter" id="starter" onChange={(e) => setPlan(e.target.value)}>
                    <option value="starterpack">Starter Pack</option>
                    <option value="standardpack">Standard Pack</option>
                    <option value="bronzepack">Bronze Pack</option>
                    <option value="silverpack">Silver Pack</option>
                    <option value="goldpack">Gold Pack</option>
                    <option value="diamondpack">Diamond Pack</option>
                  </select>

                  <input value={capital} type='number' />

                  <button onClick={AutoInvest}>Auto Invest</button>

                </div>

                <MdCancel onClick={() =>  Re_Inv()} size={28} className='cancel'/>
                  
              </div>

              
            )
          }
         </Popup> }

        </div>
         
      </div>


      <div className="main-content">
        <header>

          <div className="user-wrapper">
            <h4>Hello,  <span>{name}</span>    Welcome To Bulls Investment</h4>
          </div>

        </header>

        <main>

          <div className="cards">

            <div className="card-single" id='capital'>
              <div>

               <h1>$ {capital}</h1>
               <span>Capital</span>

              </div>

             <div>
              <span><GiMoneyStack/></span>
             </div>

            </div>
        
            

            <div className="card-single">

              <div>
                <h1>$ {earning}</h1>
                <span>Earnings</span>
              </div>

              <div>
                <span><CiWallet/></span>
              </div>

            </div>

            
            <div className="card-single">
              <div>
                <h1>$ {transaction}</h1>
                <span>Transaction</span>
              </div>

              <div>
                 <span><CiMoneyCheck1/></span>
              </div>
            </div>

          </div>

            <div className='plan-div'>

              <div>

                <h3>Starter Pack <LuPackagePlus size={40} color='grey'/></h3>
                <h4>$20 - $200</h4>
                <ul>
                  <li><span>Roi</span> <span>10%</span></li>
                  <li><span>Duration</span> <span>24 Hours</span></li>
                </ul>

                <Popup trigger={
                  <button className='inv-btn'>Invest</button>
                } modal nested>
                  {
                    invest=> (
                      <div className='modal-1'>
                        {depSuccessful 
                        
                        ? <div className='success'>
                            <div className='div1'>
                              <AiOutlineInfoCircle size={60} className='done' color='grey'/>
                              <span>Deposit Is Been Processed</span>
                            </div>
      
                            <section>
                              <div>
                                
                                <span>User Id : </span>
                                <span>{uid}</span>
                              
                              </div>
      
                              <div>
                                
                                <span>Amount : </span>
                                <span>$ {amount}</span>
                              
                              </div>
      
                              <div>
                                
                                <span>Status : </span>
                                <span>Processing</span>
                              
                              </div>

                              <div>

                                <span>Package Plan : </span>
                                <span>{plan}</span>
                              </div>
                            </section>
                            
      
      
                          </div>


                       : <div className='modal-content'>
                          <select name="Starter" id="starter" onChange={(e) => setPlan(e.target.value)}>
                            <option value="starterpack">Starter Pack</option>
                            <option value="standardpack">Standard Pack</option>
                            <option value="bronzepack">Bronze Pack</option>
                            <option value="silverpack">Silver Pack</option>
                            <option value="goldpack">Gold Pack</option>
                            <option value="diamondpack">Diamond Pack</option>
                          </select>
                          
                          
                          
                          <form onSubmit={Deposit}>

                              <label htmlFor="deposit">Amount</label>
                              <div>
                                <span>$</span>
                                <input type="number" name='amount' id='deposit' placeholder='Amount To Be Deposited' min={20} max={200}/>
                              </div>

                              <label htmlFor="wallet">Copy Address :</label>
                              <div>
                                <AiOutlineCopy onClick={copyToClipboard} size={24} className='copy'/>
                                <input type="text" value='bc1q6x5aj8tt0t57yjnxfzf73wy9r3w26mn64ymxm3' id='wallet'/>
                                
                              </div>

                              <label htmlFor="upload">Upload File</label>
                              <input type="file" id='upload' className='file' onChange={(e) => {
                                setFile(e.target.files[0])
                              }} />

                              <input type="submit" value='Send' id="send"/>

                          </form>
                        

                      

                          
                          
                        </div> }

                        <MdCancel onClick={() =>  invest()} size={28} className='cancel'/>
                      </div>
                    )
                  }
                </Popup>
                
              </div>

              
              <div>
                <h3>Standard Pack <LuPackagePlus size={40} color='lightblue'/></h3>
                <h4>$200 - $500</h4>
                <ul>
                  <li><span>Roi</span> <span >20%</span></li>
                  <li><span >Duration</span> <span >48 Hours</span></li>
                </ul>

                <Popup trigger={
                  <button className='inv-btn'>Invest</button>
                } modal nested>
                  {
                    invest=> (
                      <div className='modal-1'>
                        {depSuccessful 
                        ? <div className='success'>
                            <div className='div1'>
                              <AiOutlineInfoCircle size={60} className='done' color='grey'/>
                              <span>Deposit Is Been Processed</span>
                            </div>
      
                            <section>
                              <div>
                                
                                <span>User Id : </span>
                                <span>{uid}</span>
                              
                              </div>
      
                              <div>
                                
                                <span>Amount : </span>
                                <span>$ {amount}</span>
                              
                              </div>
      
                              <div>
                                
                                <span>Status : </span>
                                <span>Processing</span>
                              
                              </div>

                              <div>

                                <span>Package Plan : </span>
                                <span>{plan}</span>
                              </div>
                            </section>
                            
      
    
                          </div>

                        
                      : <div className='modal-content'>
                          <select name="Starter" id="starter">
                            <option value="starterpack">Starter Pack</option>
                            <option value="standardpack">Standard Pack</option>
                            <option value="bronzepack">Bronze Pack</option>
                            <option value="silverpack">Silver Pack</option>
                            <option value="goldpack">Gold Pack</option>
                            <option value="diamondpack">Diamond Pack</option>
                          </select>
                          
                          
                          
                          <form onSubmit={Deposit}>

                              <label htmlFor="deposit">Amount</label>
                              <div>
                                <span>$</span>
                                <input type="number" name='amount' id='deposit' placeholder='Amount To Be Deposited' min={20} max={200}/>
                              </div>

                              <label htmlFor="wallet">Copy Address :</label>
                              <div>
                                <AiOutlineCopy onClick={copyToClipboard} size={24} className='copy'/>
                                <input type="text" value='bc1q6x5aj8tt0t57yjnxfzf73wy9r3w26mn64ymxm3' id='wallet'/>
                                
                              </div>

                              <label htmlFor="upload">Upload File</label>
                              <input type="file" id='upload' className='file' />

                              <input type="submit" value='Send' id="send"/>

                          </form>
                        

                      

                          
                          
                        </div> }

                        <MdCancel onClick={() =>  invest()} size={28} className='cancel'/>
                      </div>
                    )
                  }
                </Popup>
          
              </div>

             
              <div>
                <h3>Bronze Pack <LuPackagePlus size={40} color='saddlebrown'/></h3>
                <h4>$500 - $1000</h4>
                <ul>
                  <li><span>Roi</span> <span >50%</span></li>
                  <li><span >Duration</span> <span>72 Hours</span></li>
                </ul>

                <Popup trigger={
                  <button className='inv-btn'>Invest</button>
                } modal nested>
                  {
                    invest=> (
                      <div className='modal-1'>
                        {depSuccessful 
                      ? <div className='success'>
                          <div className='div1'>
                            <AiOutlineInfoCircle size={60} className='done' color='grey'/>
                            <span>Deposit Is Been Processed</span>
                          </div>

                          <section>
                            <div>
                              
                              <span>User Id : </span>
                              <span>{uid}</span>
                            
                            </div>

                            <div>
                              
                              <span>Amount : </span>
                              <span>$ {amount}</span>
                            
                            </div>

                            <div>
                              
                              <span>Status : </span>
                              <span>Processing</span>
                            
                            </div>

                            <div>

                              <span>Package Plan : </span>
                              <span>{plan}</span>
                            </div>
                          </section>
                      


                        </div>



                      : <div className='modal-content'>
                          <select name="Starter" id="starter">
                            <option value="starterpack">Starter Pack</option>
                            <option value="standardpack">Standard Pack</option>
                            <option value="bronzepack">Bronze Pack</option>
                            <option value="silverpack">Silver Pack</option>
                            <option value="goldpack">Gold Pack</option>
                            <option value="diamondpack">Diamond Pack</option>
                          </select>
                          
                          
                          
                          <form onSubmit={Deposit}>

                              <label htmlFor="deposit">Amount</label>
                              <div>
                                <span>$</span>
                                <input type="number" name='amount' id='deposit' placeholder='Amount To Be Deposited' min={20} max={200}/>
                              </div>

                              <label htmlFor="wallet">Copy Address :</label>
                              <div>
                                <AiOutlineCopy onClick={copyToClipboard} size={24} className='copy'/>
                                <input type="text" value='bc1q6x5aj8tt0t57yjnxfzf73wy9r3w26mn64ymxm3' id='wallet'/>
                                
                              </div>

                              <label htmlFor="upload">Upload File</label>
                              <input type="file" id='upload' className='file' />

                              <input type="submit" value='Send' id="send"/>

                          </form>
                        

                      

                          
                          
                        </div> }

                        <MdCancel onClick={() =>  invest()} size={28} className='cancel'/>
                      </div>
                    )
                  }
                </Popup>

              </div>

          
              <div>
                <h3>Silver Pack <LuPackagePlus size={40} color='silver'/></h3>
                <h4>$1000 - $3000</h4>
                <ul>
                  <li><span>Roi</span> <span>100%</span></li>
                  <li><span>Duration</span> <span>96 Hours</span></li>
                </ul>

                <Popup trigger={
                  <button className='inv-btn'>Invest</button>
                } modal nested>
                  {
                    invest=> (
                      <div className='modal-1'>
                        {depSuccessful 
                        ? <div className='success'>
                            <div className='div1'>
                              <AiOutlineInfoCircle size={60} className='done' color='grey'/>
                              <span>Deposit Is Been Processed</span>
                            </div>
      
                            <section>
                              <div>
                                
                                <span>User Id : </span>
                                <span>{uid}</span>
                              
                              </div>
      
                              <div>
                                
                                <span>Amount : </span>
                                <span>$ {amount}</span>
                              
                              </div>
      
                              <div>
                                
                                <span>Status : </span>
                                <span>Processing</span>
                              
                              </div>

                              <div>

                                <span>Package Plan : </span>
                                <span>{plan}</span>
                              </div>
                            </section>
                            
      
      
                          </div>
 
                        : <div className='modal-content'>
                            <select name="Starter" id="starter">
                              <option value="starterpack">Starter Pack</option>
                              <option value="standardpack">Standard Pack</option>
                              <option value="bronzepack">Bronze Pack</option>
                              <option value="silverpack">Silver Pack</option>
                              <option value="goldpack">Gold Pack</option>
                              <option value="diamondpack">Diamond Pack</option>
                            </select>
                            
                            
                            
                            <form onSubmit={Deposit}>

                                <label htmlFor="deposit">Amount</label>
                                <div>
                                  <span>$</span>
                                  <input type="number" name='amount' id='deposit' placeholder='Amount To Be Deposited' min={20} max={200}/>
                                </div>

                                <label htmlFor="wallet">Copy Address :</label>
                                <div>
                                  <AiOutlineCopy onClick={copyToClipboard} size={24} className='copy'/>
                                  <input type="text" value='bc1q6x5aj8tt0t57yjnxfzf73wy9r3w26mn64ymxm3' id='wallet'/>
                                  
                                </div>

                                <label htmlFor="upload">Upload File</label>
                                <input type="file" id='upload' className='file' />

                                <input type="submit" value='Send' id="send"/>

                            </form>
                          

                        

                            
                            
                          </div> }

                        <MdCancel onClick={() =>  invest()} size={28} className='cancel'/>
                      </div>
                    )
                  }
                </Popup>


              </div>

            
              <div>
                <h3>Gold Pack <LuPackagePlus size={40} color='gold'/></h3>
                <h4>$3000 - $5000</h4>
                <ul>
                  <li><span>Roi</span> <span>200%</span></li>
                  <li><span>Duration</span> <span >120 Hours</span></li>
                </ul>

                <Popup trigger={
                  <button className='inv-btn'>Invest</button>
                } modal nested>
                  {
                    invest=> (
                      <div className='modal-1'>
                        {depSuccessful 
                        
                        ? <div className='success'>
                            <div className='div1'>
                              <AiOutlineInfoCircle size={60} className='done' color='grey'/>
                              <span>Deposit Is Been Processed</span>
                            </div>
      
                            <section>
                              <div>
                                
                                <span>User Id : </span>
                                <span>{uid}</span>
                              
                              </div>
      
                              <div>
                                
                                <span>Amount : </span>
                                <span>$ {amount}</span>
                              
                              </div>
      
                              <div>
                                
                                <span>Status : </span>
                                <span>Processing</span>
                              
                              </div>

                              <div>

                                <span>Package Plan : </span>
                                <span>{plan}</span>
                              </div>
                            </section>
                            
      
      
                          </div>

                        : <div className='modal-content'>
                            <select name="Starter" id="starter">
                              <option value="starterpack">Starter Pack</option>
                              <option value="standardpack">Standard Pack</option>
                              <option value="bronzepack">Bronze Pack</option>
                              <option value="silverpack">Silver Pack</option>
                              <option value="goldpack">Gold Pack</option>
                              <option value="diamondpack">Diamond Pack</option>
                            </select>
                            
                            
                            
                            <form onSubmit={Deposit}>

                                <label htmlFor="deposit">Amount</label>
                                <div>
                                  <span>$</span>
                                  <input type="number" name='amount' id='deposit' placeholder='Amount To Be Deposited' min={20} max={200}/>
                                </div>

                                <label htmlFor="wallet">Copy Address :</label>
                                <div>
                                  <AiOutlineCopy onClick={copyToClipboard} size={24} className='copy'/>
                                  <input type="text" value='bc1q6x5aj8tt0t57yjnxfzf73wy9r3w26mn64ymxm3' id='wallet'/>
                                  
                                </div>

                                <label htmlFor="upload">Upload File</label>
                                <input type="file" id='upload' className='file' />

                                <input type="submit" value='Send' id="send"/>

                            </form>
                          

                        

                            
                            
                          </div> }

                          <MdCancel onClick={() =>  invest()} size={28} className='cancel'/>
                        </div> 
                    )
                  }
                </Popup>


              </div>

            
              <div>
                <h3>Diamond Pack <LuPackagePlus size={40} color='darkolivegreen'/></h3>
                <h4>$5000 - $1000</h4>
                <ul>
                  <li><span>Roi</span> <span>400%</span></li>
                  <li><span>Duration</span> <span>144 Hours</span></li>
                </ul>

                <Popup trigger={
                  <button className='inv-btn'>Invest</button>
                } modal nested>
                  {
                    invest=> (
                      <div className='modal-1'>
                        {depSuccessful 
                        
                        ? <div className='success'>
                            <div className='div1'>
                              <AiOutlineInfoCircle size={60} className='done' color='grey'/>
                              <span>Deposit Is Been Processed</span>
                            </div>
      
                            <section>
                              <div>
                                
                                <span>User Id : </span>
                                <span>{uid}</span>
                              
                              </div>
      
                              <div>
                                
                                <span>Amount : </span>
                                <span>$ {amount}</span>
                              
                              </div>
      
                              <div>
                                
                                <span>Status : </span>
                                <span>Processing</span>
                              
                              </div>

                              <div>

                                <span>Package Plan : </span>
                                <span>{plan}</span>
                              </div>
                            </section>
                            
      
      
                          </div>



                        : <div className='modal-content'>
                              <select name="Starter" id="starter">
                                <option value="starterpack">Starter Pack</option>
                                <option value="standardpack">Standard Pack</option>
                                <option value="bronzepack">Bronze Pack</option>
                                <option value="silverpack">Silver Pack</option>
                                <option value="goldpack">Gold Pack</option>
                                <option value="diamondpack">Diamond Pack</option>
                              </select>
                              
                              
                              
                              <form onSubmit={Deposit}>

                                  <label htmlFor="deposit">Amount</label>
                                  <div>
                                    <span>$</span>
                                    <input type="number" name='amount' id='deposit' placeholder='Amount To Be Deposited' min={20} max={200}/>
                                  </div>

                                  <label htmlFor="wallet">Copy Address :</label>
                                  <div>
                                    <AiOutlineCopy onClick={copyToClipboard} size={24} className='copy'/>
                                    <input type="text" value='bc1q6x5aj8tt0t57yjnxfzf73wy9r3w26mn64ymxm3' id='wallet'/>
                                    
                                  </div>

                                  <label htmlFor="upload">Upload File</label>
                                  <input type="file" id='upload' className='file' />

                                  <input type="submit" value='Send' id="send"/>

                              </form>
                            

                          

                              
                              
                            </div> }

                        <MdCancel onClick={() =>  invest()} size={28} className='cancel'/>
                      </div>
                    )
                  }
                </Popup>


              </div>

            </div>    

          
        </main>
      </div>
    </div>
  
   
  )
}
