import React, { useEffect, useState } from 'react'
import Output from './Output'
import '../../App.css'


export default function Result() {
  const [show, setshow] = useState(false);
  const data = localStorage.getItem('FormData');
  const pData1 = JSON.parse(data);
  const [pData,setpdata]=useState(pData1)
  
  //delete item from localstorage
const deletenode=(index)=>{
const fdata=pData.filter((elem,ind)=>{
    return ind!==index;
})
setpdata(fdata);
localStorage.setItem('FormData',JSON.stringify(pData))
if(fdata<1){setshow(false)
  localStorage.setItem('FormData',JSON.stringify([]))

}
}
useEffect(() => {
  if (pData==null||pData.length<1) {
    setshow(false)
  }else{
    setshow(true);
  }
}, [])

  return (
    <>
      <h1 className='text-white'> All Feedback</h1>
      <div>
        <table className="table table-dark table-stripped table-borderless">
          <thead className="thead-dark">
            <tr className='lead'>
              <th>S.NO</th>
              <th>Form Name</th>
              <th>Message</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Name</th>
              <th>que1</th>
              <th>que2</th>
              <th>que3</th>
              <th>que4</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
           <Output formdata={pData} deletenode={deletenode} checkval={show}/>
          </tbody>
        </table>
        {!show&& <h1 className='text-center text-warning'>data not found yet </h1>}

      </div>

    </>
  )
}
