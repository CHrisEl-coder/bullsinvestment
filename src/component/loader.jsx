import React from 'react'
import spinner from '../assets/svg/spinner.svg'


export default function Loader() {
  return (
    <div>
        <div>
            <img src={spinner} alt="Loading..." />
            <p>Fetching Data...</p>
        </div>
    </div>
  )
}
