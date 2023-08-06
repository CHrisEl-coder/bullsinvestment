import React from 'react'
import {
    CiFacebook
} from 'react-icons/ci'

import { FacebookAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { db } from '../firebase'
import { getDoc, serverTimestamp, setDoc, doc } from 'firebase/firestore'

async function onSubmit(e) {
  e.preventDefault()

  try {
    const provider = new FacebookAuthProvider()
    const auth = getAuth()

    const result = await signInWithPopup(auth, provider)

    const user = result.user

    const docRef = doc(db, 'BullsInvestment', user.uid)

    const docSnap = await getDoc(docRef)

    if (!docSnap.exists()) {
      await setDoc(docRef, {
        Capital: 0,
        Earnings: 0,
        name: user.displayName,
        email: user.email,
        Transaction: 0,
        Pending: 0,
        Withdrawal: 0,
        timeStamp: serverTimestamp()
      })
    }

  } catch (error) {
    console.log(error)
  }


}

export default function Fb() {
  return (
    <>
    <button className="fb" onClick={onSubmit}><CiFacebook className='fb-icon'/>Facebook</button>
    </>
  )
}
