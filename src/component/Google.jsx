import React from 'react'
import { FaGooglePlusG } from 'react-icons/fa'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { db } from '../firebase'
import { getDoc, serverTimestamp, setDoc, doc } from 'firebase/firestore'

export default function Google() {
 

  async function onSubmit(e) {
    e.preventDefault()

    try {
      const provider = new GoogleAuthProvider()
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
          timeStamp: serverTimestamp()
        })
      }

    } catch (error) {
      console.log(error)
    }


  }
  return (
    <>
    <button type='button' class="google" onClick={onSubmit}><FaGooglePlusG className='google-icon'/>Continue With Google</button></>
  )
}
