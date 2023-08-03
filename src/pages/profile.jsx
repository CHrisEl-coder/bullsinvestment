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


export default function Profile() {
  const auth = getAuth() 
  const navigate = useNavigate()

  const [userData, setUserData] = useState({
    name: auth.currentUser.displayName,
    image: auth.currentUser.photoURL
  })
  const {name, image} = userData

 



  function onLogOut () {
    auth.signOut();
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
              <Link to='' className='side-li'><TbPigMoney/> <span>Investment</span></Link>
            </li>
            <li>
              <Link to='' className='side-li'><GiPayMoney/> <span>Deposit</span></Link>
            </li>
            <li>
              <Link to='' className='side-li'><GiReceiveMoney/> <span>Withdraw</span></Link>
            </li>
            <li>
              <Link to='' className='side-li'><TbReportMoney/> <span>Transactions</span></Link>
            </li>
            <li onClick={onLogOut}>
              <Link to="" className='side-li'><BiLogOut /> <span >Log-Out</span></Link>
            </li>
          </ul>
        </div>
      </div>


      <div className="main-content">
        <header>

          <h2>
            <label for="">
              <FaBars className='bars'/>
            </label>
            <span>Dashboard</span>
  
          </h2>

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

            <div className="card-single">
              <div>

               <h1>$ 0</h1>
               <span>Capital</span>

              </div>

             <div>
              <span><GiMoneyStack/></span>
             </div>

            </div>
        
            

            <div className="card-single">

              <div>
                <h1>$ 0</h1>
                <span>Earnings</span>
              </div>

              <div>
                <span><CiWallet/></span>
              </div>

            </div>

            
            <div className="card-single">
              <div>
                <h1>$ 0</h1>
                <span>Transaction</span>
              </div>

              <div>
                 <span><CiMoneyCheck1/></span>
              </div>
            </div>

          </div>

          <table>
            <tr>
              <th>Investment Plan</th>
              <th>Amount</th>
              <th>Investment RunTime</th>
              <th>Percentage</th>
            </tr>


            <tr>
              <td>
                Basic Plan 1
              </td>
              <td>
                $20 - $400
              </td>
              <td>
                24 Hours
              </td>
              <td>
                10%
              </td>
              <button className='inv-btn'>Invest</button>
            </tr>


            <tr>
              <td>
                Basic Plan 2
              </td>
              <td>
                $400 - $1000
              </td>
              <td>
                48 Hours
              </td>
              <td>
                50%
              </td>
              <button className='inv-btn'>Invest</button>
            </tr>


            <tr>
              <td>Professional Plan 1</td>
              <td>
                $1000 - $1,999
              </td>
              <td>
                72 Hours
              </td>
              <td>
                100%
              </td>
              <button className='inv-btn'>Invest</button>
            </tr>


            <tr>
             <td>
               Professional Plan 2
             </td>
             <td>
               $2000 - $4000
             </td>
             <td>
               96 Hours
             </td>
              <td>
                150%
              </td>
              <button className='inv-btn'>Invest</button>
            </tr>

            <tr>
              <td>
                Corporate plan 1
              </td>
              <td>
                
                $4000 - $10,000
              </td>
              <td>
                120 Hours
              </td>
              <td>
                200%
              </td>
              <button className='inv-btn'>Invest</button>
            </tr>

            <tr>
              <td>
                Corporate Plan 2
              </td>
              <td>
                $10,000 - ....
              </td>
              <td>
                144 Hours
              </td>
              <td>
                400%
              </td>
              <button className='inv-btn'>Invest</button>
            </tr>
          </table>

        </main>
      </div>
    </div>
  
   
  )
}
