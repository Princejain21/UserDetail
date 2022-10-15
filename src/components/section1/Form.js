import React, { useEffect, useState } from 'react'
import '../../App.css'
import Radio from './Radio';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import Alert from '../../Asset/alert.png'


export default function Form() {
    const [phone, setphone] = useState();
    const [color, setcolor] = useState(false);
    const [condition, setCondition] = useState(false);
    const [condition2, setCondition2] = useState(false);
    const [condition3, setCondition3] = useState(false);
    const [condition4, setCondition4] = useState(false);
    const [condition5, setCondition5] = useState(false);
    const [condition6, setCondition6] = useState(false);
    const [condition7, setCondition7] = useState(false);
    const initialData = {
        Name: "",
        Email: "",
        Number: "",
        que1: "",
        que2: "",
        que3: "",
        que4: "",

    }
   
    const getdata = () => {
        const gda = localStorage.getItem('FormData');
        const cdata = JSON.parse(gda);
        if (cdata) {
            return cdata;
        }else{
            return [];
        }
    }
    const [data, setData] = useState(initialData);
    const [error, seterror] = useState({ Number: "", Email: "", name: '', nameerror: '', emailerror: '', numerror: "", que1: "", que2: "", que3: "", que4: "" });
    const [fdata, setfdata] = useState(getdata());
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }
    const handlesubmitform = (e) => {
        e.preventDefault();
        data.Number = phone;
        seterror(validate(data))

    }
    useEffect(() => {
        if (Object.keys(error).length === 2 && error.nameerror === 'is-valid' && error.emailerror === 'is-valid') {
            fdata.push(data);
            const converData=JSON.stringify(fdata)
            console.log(fdata, 'fdata hai yh',converData,'bdala')
            localStorage.setItem('FormData',converData )
            window.location.href = '/confirm';
        }
    }, [error])
    const validate = (value) => {
        const error = {};
        const RegexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
        if (!value.Email) {
            setCondition7(true)
            error.Email = "please enter the value for the above field";
            error.emailerror = 'is-invalid';
        } else if (!RegexEmail.test(value.Email)) {
            setCondition7(true)
            error.Email = 'oops! it\'s invalid format email'
            error.emailerror = 'is-invalid';
        } else {
            setCondition7(false)

            error.emailerror = 'is-valid'
        }

        if (!value.Name) {
            setCondition5(true)
            error.name = 'Name is mandatory to fill.'
            error.nameerror = 'is-invalid'
        } else {
            setCondition5(false)
            error.nameerror = 'is-valid'
        }
        if (value.que1 === '') {
            setCondition(true)
            error.que1 = 'Rating is mandetory'
        } else {
            setCondition(false)
        }
        if (value.que2 === '') {
            setCondition2(true)

            error.que2 = 'Rating is mandetory'
        } else {
            setCondition2(false)
        }
        if (value.que3 === '') {
            setCondition3(true)
            error.que3 = 'Rating is mandetory'
        } else {
            setCondition3(false)
        }
        if (value.que4 === '') {
            setCondition4(true)
            error.que4 = 'Rating is mandetory'
        } else {
            setCondition4(false)
        }
        if (value.Number === undefined) {
            setcolor(true);
            setCondition6(true)

            error.Number = 'Number is Mandetory'
        } else if (value.Number && value.Number.length < 10) {
            setcolor(true);
            setCondition6(true)
            error.Number = 'Number should be greather than and equal to 10 digits'
            console.log(value.Number.length)
        } else {
            setCondition6(false)
            setcolor(false)
        }
        return error;

    }

    return (
        <>
            <div className='px-5 py-2' style={{ backgroundColor: '#ededed' }}>
                <h2>Aromatic Bar</h2>
            </div>
            <div className='  p-5 '>
                <form onSubmit={handlesubmitform}>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='form-group'>
                                <label htmlFor='iput' className='required' >Name</label><br />
                                <input
                                    onChange={handleChange}
                                    name='Name'
                                    type='text'
                                    className={`w-75 form-control ${error.nameerror}`}
                                    placeholder='enter your name here'
                                    // ref={register}
                                    id='iput' />
                                {
                                    condition5 &&
                                    <div className='row text-danger border border-danger ml-1 mt-4 w-75 d-flex align-self-center flex-column' style={{ backgroundColor: "#fde9e9" }} >
                                        <p className={`text-danger ml-1  `}><img height='20px' className='' src={Alert} alt="..." />{error.name}</p>
                                    </div>
                                }
                            </div>
                            <div className="form-group ">
                                <label htmlFor="phone" className='required'>Phone</label>
                                <PhoneInput
                                    className=" w-75 border-primary"
                                    id="phone"
                                    name="phone"
                                    placeholder="99999999"
                                    value={phone}
                                    onChange={setphone}
                                />
                                {
                                    condition6 &&
                                    <div className={`row text-danger border border-danger ml-1 mt-4 w-75 d-flex align-self-center flex-column`} style={{ backgroundColor: "#fde9e9" }} >
                                        <p className={`text-danger ml-1  `}><img height='20px'  src={Alert} alt="..." />{error.Number}</p>
                                    </div>
                                }
                            </div>
                            {console.log(condition)}

                            <Radio
                                change={handleChange}
                                question='Please rate the quality of the service you received from your host.? '
                                id1='rad-11'
                                id2='rad-12'
                                id3='rad-13'
                                id4='rad-14'
                                name='que1'
                                errorMsg={error.que1}
                                condition={condition}
                            />
                            {
                                condition &&
                                <div className='row text-danger border border-danger ml-1 mt-4 w-75 d-flex align-self-center flex-column' style={{ backgroundColor: "#fde9e9" }} >
                                    <p className={`text-danger ml-1  `}><img height='20px' className='' src={Alert} alt="..." />{error.que1}</p>
                                </div>
                            }
                            <br />
                            <br />
                            <Radio
                                change={handleChange}
                                question='Was our restaurant clean? '
                                id1='rad-21'
                                id2='rad-22'
                                id3='rad-23'
                                id4='rad-24'
                                name='que2'
                                errorMsg={error.que2}
                            />
                            {
                                condition2 &&
                                <div className='row text-danger border border-danger ml-1 mt-4 w-75 d-flex align-self-center flex-column' style={{ backgroundColor: "#fde9e9" }} >
                                    <p className={`text-danger ml-1  `}><img height='20px' className='' src={Alert} alt="..." />{error.que2}</p>
                                </div>
                            }




                        </div>
                        <div className='col-md-6'>
                            <div className='form-group'>
                                <label htmlFor='input12' className='required' >Email</label><br />
                                <input
                                    onChange={handleChange}
                                    type='text'
                                    name='Email'
                                    className={`w-75 form-control mb-0  ${error.emailerror}`}
                                    placeholder='enter your Email here'
                                    id='input12'
                                />
                                {
                                condition7 &&
                                <div className='row text-danger border border-danger ml-1 mt-4 w-75 d-flex align-self-center flex-column' style={{ backgroundColor: "#fde9e9" }} >
                                    <p className={`text-danger ml-1  `}><img height='20px' className='' src={Alert} alt="..." />{error.Email}</p>
                                </div>
                            }
                            </div>
                            <br/>
                            <br/>
                            <br/>

                            <Radio
                                change={handleChange}
                                question=' Please rate the quality of your beverage.? '
                                id1='rad-31'
                                id2='rad-32'
                                id3='rad-33'
                                id4='rad-34'
                                name='que3'
                                errorMsg={error.que3}
                            />
                            {
                                condition3 &&
                                <div className='row text-danger border border-danger ml-1 mt-4 w-75 d-flex align-self-center flex-column' style={{ backgroundColor: "#fde9e9" }} >
                                    <p className={`text-danger ml-1  `}><img height='20px' className='' src={Alert} alt="..." />{error.que3}</p>
                                </div>
                            }
                            <br />
                            <br />
                            <Radio
                                change={handleChange}
                                question=' Please rate your overall dining experience.? '
                                id1='rad-41'
                                id2='rad-42'
                                id3='rad-43'
                                id4='rad-44'
                                name='que4'
                                errorMsg={error.que4}
                            />
                            {
                                condition4 &&
                                <div className='row text-danger border border-danger ml-1 mt-4 w-75 d-flex align-self-center flex-column' style={{ backgroundColor: "#fde9e9" }} >
                                    <p className={`text-danger ml-1  `}><img height='20px' className='' src={Alert} alt="..." />{error.que4}</p>
                                </div>
                            }
                            <br />
                            <br />
                            <br />

                            <button type='submit' className='btn btn-primary'>submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </>

    )
}
