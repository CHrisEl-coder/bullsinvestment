import React from 'react'
import { FaBars, FaIgloo, FaSearch } from 'react-icons/fa'
import { TbPigMoney, TbReportMoney } from 'react-icons/tb'
import { GiMoneyStack, GiPayMoney, GiReceiveMoney } from 'react-icons/gi'
import {BiLogOut} from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import { CiMoneyCheck1, CiWallet } from 'react-icons/ci'
import '../dash.css'
import { useState } from 'react'
import { getAuth } from 'firebase/auth'
import { doc, onSnapshot} from 'firebase/firestore'
import { db } from '../firebase'
import { useEffect } from 'react'
import { toast } from 'react-toastify'


export default function Profile() {

  // Initializing firebase auth and useNavigate
  const auth = getAuth() 
  const navigate = useNavigate()

// Setting Up The Uid For Users 
  let uid = auth.currentUser.uid

  

  const [userData, setUserData] = useState({
    name: auth.currentUser.displayName,
    image: auth.currentUser.photoURL
  })
  const {name, image} = userData

  const [userInfo, setUserInfo] = useState({
    capital: '',
    transaction: '',
    earning: ''
  })

  
    useEffect(() => {
    const docSnap = onSnapshot(doc(db, 'BullsInvestment', uid), (doc) => {
      setUserInfo({
        capital: doc.data().Capital,
        earning: doc.data().Earning,
        transaction: doc.data().transaction
      })
    }); 
    return docSnap
  }, [])


 


  const {capital, earning, transaction} = userInfo;

  function Investment() {

      if (capital !== 0) {
        toast("You Have An Investment Fund Of " + {capital})
      }else {
        toast("No Investment Yet")
      }
    } 

    function Transact() {

      if (transaction !== 0) {
        toast("You Have An Investment Fund Of " + {transaction})
      }else {
        toast("No Transaction Yet")
      }
    } 

    function Depo() {

      if (capital !== 0) {
        toast("You Have An Investment Fund Of " + {capital})
      }else {
        toast("No Deposit Yet")
      }
    } 

    function Witdraw() {

      if (capital !== 0) {
        toast("You Have An Investment Fund Of " + {earning})
      }else {
        toast("No Wthdrawals Yet")
      }
    } 
  function onLogOut () {
    auth.signOut();
    toast("Logged Out")
    navigate("/");
  }

  return (
    <div className='body'>
      <div className='sidebar'>
        <div className='sidebar-brand'>
          <h2>
            <span className='bulls'>BullsInvestment</span>
          </h2>
        </div>
        <div className='sidebar-menu'>
          <ul>
            <li>
              <Link to='' className='side-li activate'><FaIgloo></FaIgloo> <span>Dashboard</span></Link>
            </li>
            <li>
              <Link onClick={Investment} className='side-li'><TbPigMoney/> <span>Investment</span></Link>
            </li>
            <li>
              <Link onClick={Depo} className='side-li'><GiPayMoney/> <span>Deposit</span></Link>
            </li>
            <li>
              <Link onClick={Witdraw} className='side-li'><GiReceiveMoney/> <span>Withdraw</span></Link>
            </li>
            <li>
              <Link onClick={Transact} className='side-li'><TbReportMoney/> <span>Transactions</span></Link>
            </li>
            <li onClick={onLogOut}>
              <Link to="" className='side-li'><BiLogOut /> <span >Log-Out</span></Link>
            </li>
          </ul>
        </div>
      </div>


      <div className="main-content">
        <header>

        

          <div className="search-wrapper">
            <input type='search' placeholder='Search here' />
            <span><FaSearch/></span>
          </div>

          <div className="user-wrapper">
            <img src={image} alt=''/>
            <h4>Hello, {name}</h4>
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
                <h1>
                  Basic Plan 1
                </h1>
                <h3>
                  $20 - $400
                </h3>
                <span>
                  24 Hours
                </span>
                <sub>
                  10%
                </sub>

                <Link to="/transact-$" className='inv-btn'>Invest</Link>
              </div>

              
              <div>
                <h1>
                  Basic Plan 2
                </h1>
                <h3>
                  $400 - $1000
                </h3>
                <span>
                  48 Hours
                </span>
                <sub>
                  50%
                </sub>

                <Link to="/transact-$" className='inv-btn'>Invest</Link>
              </div>
                  


              <div>
                <h1>
                  Professional Plan 1
                </h1>
                <h3>
                  $1000 - $1,999
                </h3>
                <span>
                  72 Hours
                </span>
                <sub>
                  100%
                </sub>

                <Link to="/transact-$" className='inv-btn'>Invest</Link>
              </div>

              <div>
                <h1>
                  Professional Plan 2
                </h1>
                <h3>
                  $2000 - $4000
                </h3>
                <span>
                  96 Hours
                </span>
                <sub>
                  150%
                </sub>

                <Link to="/transact-$" className='inv-btn'>Invest</Link>
              </div>

              <div>
                <h1>
                  Corporate Plan 1
                </h1>
                <h3>
                  $4000 - $10,000
                </h3>
                <span>
                  120 Hours
                </span>
                <sub>
                  200%
                </sub>

                <Link to="/transact-$" className='inv-btn'>Invest</Link>
              </div>

              <div>
                <h1>
                  Corporate Plan 2
                </h1>
                <h3>
                  $10,000
                </h3>
                <span>
                  144 Hours
                </span>
                <sub>
                  $400%
                </sub>

                <Link to="/transact-$" className='inv-btn'>Invest</Link>
              </div>

            </div>    

          
        </main>
      </div>
    </div>
  
   
  )
}
