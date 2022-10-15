import React from 'react'
import Alert from '../../Asset/alert.png'

export default function Alertmsg(props) {
    return (
        <div className='row text-danger border border-danger ml-1 mt-4 w-75 d-flex align-self-center flex-column' style={{ backgroundColor: "#fde9e9" }} >
            <p className={`text-danger ml-1  `}><img height='20px' src={Alert} alt="..." />{props.message}</p>
        </div>
    )
}
