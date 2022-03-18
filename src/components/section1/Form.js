import React, { useEffect,useState } from 'react'
import '../../App.css'
export default function Form(){
    const initialData={
        Name:"",
        Email:"", 
        Number:"",
        Message:"",
        que1:"",
        que2:"",
        que3:"",
        que4:"",
       
    }
    const getdata=()=>{
        const gda=localStorage.getItem('FormData');
        const cdata=JSON.parse(gda);
        if(cdata){
            return cdata;
        }else{
            return [];
        }
    }
    const [data, setData] = useState(initialData);
    const [error,seterror]=useState({Number:"",Email:"",name:'',nameerror:'',emailerror:'',numerror:""});
    const [fdata,setfdata]=useState(getdata());
       const handleChange=(e)=>{    
       const {name,value}=e.target;
       setData({...data,[name]:value});
   }
   const handlesubmitform=(e)=>{
       e.preventDefault();
       seterror(validate(data))
     
   }   
   useEffect(()=>{

  if(error.numerror==='is-valid'&&error.nameerror==='is-valid'&&error.emailerror==='is-valid'){
      setfdata([...fdata,data]);
      if(fdata.length>=1){localStorage.setItem('FormData',JSON.stringify(fdata))};
        alert('thanks for submitting the data')
    }
   },[error])
const validate=(value)=>{
    const error={};
    const RegexEmail=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
    if(value.Number.length===0){
        error.Number='Number is mandatory'
        error.numerror='is-invalid'
    }else if(value.Number.length>10||value.Number.length<10 || !value.Number.length===0){
        error.Number='Number must be 10 digit only'
        error.numerror='is-invalid'
    } 
    else{
        error.numerror='is-valid'
    }
    if(!value.Email){
    error.Email="email is mandatory";
    error.emailerror='is-invalid';    
}else if(!RegexEmail.test(value.Email)){
    error.Email='oops! it\'s invalid format email'
    error.emailerror='is-invalid';
    }else{
        error.emailerror='is-valid'
    }

    if(!value.Name){
        error.name='Name is mandatory to fill.'
        error.nameerror='is-invalid'
    }else{
        error.nameerror='is-valid'   
    }
return error;

}

    return (
        <div className='container bg-secondary mt-5 '>
            <h4 className='text-primary'>Aromatic Bar</h4>
            <small> We are committed to providing you with the best
                dining experience possible, so we welcome your comments. Please fill out this questionnaire. Thank you.
            </small>
            <form onSubmit={handlesubmitform}>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='form-group'>
                            <label htmlFor='input1' id='area' placeholder='Text field'><b>Feedback</b></label><br />
                            <textarea 
                            rows='5'
                            onChange={handleChange}
                            name='Message' 
                            className='form-control prince'
                            cols='40'
                            value={data.Message}
                            id='area' />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='iput'  >Name</label><br />
                            <input
                            onChange={handleChange} 
                            name='Name' 
                            type='text'
                            className={`form-control ${error.nameerror}`}
                            placeholder='enter your name here'
                            // ref={register}
                            id='iput' />
                            <small>{error.name}</small>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='input' >Phone</label><br />
                            <div className='input-group'>
                                <div className='input-group-prepand'>
                                    <span><img style={{ height: '40px' }} src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-india-flag-countrys-flags-justicon-flat-justicon.png" alt='...' /></span>
                                </div>
                                <input
                                onChange={handleChange} 
                                name='Number'
                                type='Number' 
                                className={`form-control ${error.numerror}`}
                                placeholder='enter your mobile number' 
                                id='input' ></input>
                            </div>
                            <small className='container'>{error.Number}</small>

                        </div>



                    </div>
                    <div className='col-md-6'>
                        <div className='form-group'>
                            <label htmlFor='input12' >Email:-</label><br />
                            <input 
                            onChange={handleChange} 
                            type='text' 
                            name='Email' 
                            className={`form-control ${error.emailerror}`}
                            placeholder='enter your Email here' 
                            id='input12'
                            // ref={register} 
                            />
                            <small className='container'>{error.Email}</small>
                        </div>
                        <ol>
                            <li>Please rate the quality of the service you received from your host.? </li>
                            <div className='row'>
                                <div className='col py-2'>
                                    <div className='form-check form-check-inline'>
                                        <input onChange={handleChange} value='Excellent' type='radio' name='que1' className='form-check-input' id='check1' />
                                        <label htmlFor='check1' className='form-check-label'>Excellent</label>
                                    </div>
                                    <div className='form-check form-check-inline'>
                                        <input onChange={handleChange} type='radio' value='good' name='que1' className='form-check-input' id='check2' />
                                        <label htmlFor='check2' className='form-check-label' >good</label>
                                    </div>
                                    <div className='form-check form-check-inline'>
                                        <input onChange={handleChange} type='radio' value='fair' name='que1' className='form-check-input' id='check3' />
                                        <label htmlFor='check3' className='form-check-label'>fair</label>
                                    </div>
                                    <div className='form-check form-check-inline'>
                                        <input onChange={handleChange} type='radio' value='bad' name='que1' className='form-check-input' id='check4' />
                                        <label htmlFor='check4' className='form-check-label' >bad</label>
                                    </div>

                                </div>
                            </div>

                            <li> Please rate the quality of your beverage.? </li>
                            <div className='row'>
                                <div className='col py-2'>
                                    <div className='form-check form-check-inline'>
                                        <input onChange={handleChange} value='Excellent' type='radio' name='que2' className='form-check-input' id='check11' />
                                        <label htmlFor='check11' className='form-check-label'>Excellent</label>
                                    </div>
                                    <div className='form-check form-check-inline'>
                                        <input onChange={handleChange} value='good' type='radio' name='que2' className='form-check-input' id='check12' />
                                        <label htmlFor='check12' className='form-check-label' >good</label>
                                    </div>
                                    <div className='form-check form-check-inline'>
                                        <input onChange={handleChange} value='fair' type='radio' name='que2' className='form-check-input' id='check13' />
                                        <label htmlFor='check13' className='form-check-label'>fair</label>
                                    </div>
                                    <div className='form-check form-check-inline'>
                                        <input onChange={handleChange} type='radio' value='bad' name='que2' className='form-check-input' id='check14' />
                                        <label htmlFor='check14' className='form-check-label' >bad</label>
                                    </div>

                                </div>
                            </div>

                            <li>Was our restaurant clean? </li>
                            <div className='row'>
                                <div className='col py-2'>
                                    <div className='form-check form-check-inline'>
                                        <input onChange={handleChange} type='radio' name='que3' className='form-check-input' value='Excellent' id='check21' />
                                        <label htmlFor='check21' className='form-check-label' id='check1'>Excellent</label>
                                    </div>
                                    <div className='form-check form-check-inline'>
                                        <input onChange={handleChange} type='radio' name='que3' className='form-check-input' value='good' id='check22' />
                                        <label htmlFor='check22' className='form-check-label' >good</label>
                                    </div>
                                    <div className='form-check form-check-inline'>
                                        <input onChange={handleChange} value='fair' type='radio' name='que3' className='form-check-input' id='check23' />
                                        <label htmlFor='check23' className='form-check-label'>fair</label>
                                    </div>
                                    <div className='form-check form-check-inline'>
                                        <input onChange={handleChange} value='bad' type='radio' name='que3' className='form-check-input' id='check24' />
                                        <label htmlFor='check24' className='form-check-label' >bad</label>
                                    </div>
                                </div>
                            </div>
                            <li>. Please rate your overall dining experience.?</li>
                            <div className='row'>
                                <div className='col py-2'>
                                    <div className='form-check form-check-inline'>
                                        <input onChange={handleChange} value='Excellent' type='radio' name='que4' className='form-check-input' id='check51' />
                                        <label htmlFor='check51' className='form-check-label' id='check1'>Excellent</label>
                                    </div>
                                    <div className='form-check form-check-inline'>
                                        <input onChange={handleChange} value='good' type='radio' name='que4' className='form-check-input' id='check52' />
                                        <label htmlFor='check52' className='form-check-label' >good</label>
                                    </div>
                                    <div className='form-check form-check-inline'>
                                        <input onChange={handleChange} value='fair' type='radio' name='que4' className='form-check-input' id='check53' />
                                        <label htmlFor='check53' className='form-check-label'>fair</label>
                                    </div>
                                    <div className='form-check form-check-inline'>
                                        <input onChange={handleChange} value='bad' type='radio' name='que4' className='form-check-input' id='check54' />
                                        <label htmlFor='check54' className='form-check-label' >bad</label>
                                    </div>

                                </div>
                            </div>
                        </ol>
                        <button type='submit' className='btn btn-primary'>submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
