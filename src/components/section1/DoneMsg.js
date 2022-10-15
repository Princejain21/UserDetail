import React from 'react'
import img from '../../Asset/confirmTick.png'
import { Link } from 'react-router-dom'
import '../CSS/confirm.css'
export default function DoneMsg() {
  return (
    <div id='message'>
                <img src={img} className='img-responsive' alt="..."/>
        <h2 className='font-weight-bold'>Thank you for providing the feedback</h2>
        <h4>We will work towards improving your experience</h4>
        <br/>
        <br/>

        <button className='text-center text-white btn px-5 py-2' style={{backgroundColor:"purple"}}><Link to='/UserDetail' className='text-white'>Close</Link></button>

    </div>
  )
}
