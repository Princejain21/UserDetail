import React from 'react'
import '../../App.css'

export default function Radio(props) {
    return (
        <>
            <p className='required font-weight-bold'>{props.question} </p>
                    <div className='form-check form-check-inline'>
                        <input onChange={props.change} value='Excellent' type='radio' name={props.name} className='form-check-input' id={props.id1} style={{color:"purple",bacgroundColor:"purple"}} />
                        <label htmlFor={props.id1} className='form-check-label mx-4 '>Excellent</label>
                    </div>
                    <div className='form-check form-check-inline'>
                        <input onChange={props.change} type='radio' value='good' name={props.name}className='form-check-input' id={props.id2} />
                        <label htmlFor={props.id2} className='form-check-label mx-4 ' >good</label>
                    </div>
                    <div className='form-check form-check-inline'>
                        <input onChange={props.change} type='radio' value='fair' name={props.name}className='form-check-input' id={props.id3}/>
                        <label htmlFor={props.id3} className='form-check-label mx-4 '>fair</label>
                    </div>
                    <div className='form-check form-check-inline'>
                        <input onChange={props.change} type='radio' value='bad' name={props.name}className='form-check-input' id={props.id4} />
                        <label htmlFor={props.id4} className='form-check-label mx-4 ' >bad</label>
                    </div>
                    <br/>

        </>
    )
}
