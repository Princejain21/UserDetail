import React, { useEffect, useState } from 'react'
import '../../App.css'
import Radio from './Radio';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useHistory } from 'react-router-dom';
import Alertmsg from './Alertmsg';


export default function Form() {
    const [phone, setphone] = useState();
    const [condition, setCondition] = useState(false);
    const [condition2, setCondition2] = useState(false);
    const [condition3, setCondition3] = useState(false);
    const [condition4, setCondition4] = useState(false);
    const [condition5, setCondition5] = useState(false);
    const [condition6, setCondition6] = useState(false);
    const [condition7, setCondition7] = useState(false);
    const history = useHistory();
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
        } else {
            return [];
        }
    }
    const [data, setData] = useState(initialData);
    const [error, seterror] = useState({ Number: "", Email: "", name: '', nameerror: '', emailerror: '', numerror: "", que1: "", que2: "", que3: "", que4: "" });
    const fdata = getdata();
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
            const converData = JSON.stringify(fdata)
            localStorage.setItem('FormData', converData)
            history.push('/confirm')
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
        }
        else {
            const finalData = fdata.filter((elem) => {
                return elem.Email.toLowerCase() === value.Email.toLowerCase();
            })
            if (finalData.length === 0) {
                setCondition7(false)
                error.emailerror = 'is-valid'
            } else {
                setCondition7(true)
                error.Email = 'Email already Exist in Old Data'
                error.emailerror = 'is-invalid';

            }


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
            setCondition6(true)

            error.Number = 'Number is Mandetory'
        } else if (value.Number && value.Number.length < 10) {
            setCondition6(true)
            error.Number = 'Number should be greather than and equal to 10 digits'
        } else {
            setCondition6(false)
        }
        return error;

    }

    return (
        <>
            <div className=' mx-4 px-2 p-1  ' style={{ backgroundColor: '#ededed' }}>
                <h2>Aromatic Bar</h2>
            </div>
            <div className='  p-4 '>
                <form onSubmit={handlesubmitform} className="p-4" style={{ backgroundColor: '#ededed' }}>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='form-group'>
                                <label htmlFor='iput' className='required' >Name</label><br />
                                <input
                                    onChange={handleChange}
                                    name='Name'
                                    type='text'
                                    className={`w-75 form-control  ${error.nameerror}`}
                                    placeholder='enter your name here'
                                    id='iput' />
                                {
                                    condition5 && <Alertmsg message={error.name} />
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
                                    condition6 && <Alertmsg message={error.Number} />
                                }
                            </div>
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
                                condition && <Alertmsg message={error.que1} />
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
                                condition2 && <Alertmsg message={error.que2} />
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
                                    condition7 && <Alertmsg message={error.Email} />
                                }
                            </div>
                            <br />
                            <br />
                            <br />

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
                                <Alertmsg message={error.que3} />
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
                                <Alertmsg message={error.que4} />
                            }
                            <br />
                            <br />
                            <br />
                        </div>
                    </div>
                    <div className='row d-flex mr-2 justify-content-end '>
                        <button type='submit' className='btn btn-success text-white'>Submit review</button>
                    </div>
                </form>
            </div>
        </>

    )
}
