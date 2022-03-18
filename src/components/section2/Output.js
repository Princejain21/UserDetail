import React from 'react'

export default function Output(props) {
const show=props.checkval;

  return (
    <>
     {show&&props.formdata.map((item, index)=>{
                return <tr key={index} className='lead'>
                  <td>{index + 1}</td>
                  <td >aromatic bar</td> 
                  <td>{item.Message}</td>
                  <td>{item.Number}</td>
                  <td>{item.Email}</td>
                  <td>{item.Name}</td>
                  <td>{item.que1}</td>
                  <td>{item.que2}</td>
                  <td>{item.que3}</td>
                  <td className='lead'>{item.que4}</td>
                  <td><button className='btn' onClick={()=>{props.deletenode(index)}}><i className="glyphicon glyphicon-trash text-danger pl-1  " ></i></button></td>
                </tr>
              })
            }
    </>

  )
}
