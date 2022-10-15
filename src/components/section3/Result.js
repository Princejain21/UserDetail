import React,{useState,useEffect} from 'react'
import DataTable from 'react-data-table-component'
import { useHistory } from 'react-router-dom';
import Refresh from '../../Asset/refresh.png'
import '../../App.css'
export default function Result() {
  const [search,setSearch]=useState('')
  const [filter,setfilter]=useState([])
  const [table,setTable]=useState([]);
  const history=useHistory();
  const handleClick=(obj)=>{
    const deltedData= table.filter((elem)=>{
    return elem.Email!==obj.Email;
  })
  setTable(deltedData);
  setfilter(deltedData);
  localStorage.setItem('FormData',JSON.stringify(deltedData));
  }
  const handleNew=()=>{
    history.push('/UserDetail');
  }
useEffect(()=>{
  const data=localStorage.getItem('FormData');
  const fdata=JSON.parse(data);
  setTable(fdata);
  setfilter(fdata) 
},[])

useEffect(()=>{
  if(table.length!==0){
    const resultData=table.filter((elem)=>{
      return elem.Name.toLowerCase().match(search.toLowerCase());
    })
    setfilter(resultData);
  }
  },[search])

  const column=[
    {
      name:<h5 className='font-weight-bold'>View Details</h5>,
      selector:row=><p className='text-primary font-weight-bold'>View Detail</p>
    },
    {
      name:<h5 className='font-weight-bold'>Customer Name</h5>,
      selector:row=>row.Name,
      sortable:true
    },
    {
      name:<h5 className='font-weight-bold'>Email</h5>,
      selector:row=>row.Email,
      sortable:true

    },
    {
      name:<h5 className='font-weight-bold'>Phone</h5>,
      selector:row=>row.Number,

    },
    {
      name:<h5 className='font-weight-bold'>Please rate the quality of service you received from your host</h5>,
      selector:row=>row.que1
    },
    {
      name:<h5 className='font-weight-bold'>Was our restaurant clean </h5>,
      selector:row=>row.que2
    },
    {
      name:<h5 className='font-weight-bold'>Please rate the quality of your beverage. </h5>,
      selector:row=>row.que3
    },
    {
      name:<h5 className='font-weight-bold'>Please rate your overall dining experience.</h5>,
      selector:row=>row.que4
    },
    {
      name:<h5 className='font-weight-bold'>Action</h5>,
      selector:row=><button className='btn ' onClick={()=>{handleClick(row)}}><i className="glyphicon glyphicon-trash text-danger pl-1" ></i></button>
    },
  ]

//For refresh the data
const handleRefresh=()=>{
  setSearch('')
document.getElementById('searchBox').value="";
}
//delete all item
const handleDelete=()=>{
  const data=JSON.parse(localStorage.getItem('FormData'));
  if(data.length===0){
    alert('Data Already doesn\'t exist');
  }
  setTable([]);
  setfilter([]);
  localStorage.setItem('FormData',JSON.stringify([]));
}


  return (
    <>
    <DataTable 
  title={<h3 className='text-dark '>Aromatic bar<br/><small className='text-secondary'>{table.length} records found. {filter.length} filters applied</small> </h3>} 
  columns={column}
  data={filter} 
  pagination
  fixedHeader
  fixedHeaderScrollHeight='60vh'
  selectableRows
  selectableRowsHighlight
  highlightOnHover
  actions={<>
  <input className='form-control w-25' id="searchBox"  type='text'  placeholder='Search by customer name' onChange={(e)=>{setSearch(e.target.value)}}/>
  <img width="50px" height="50px" id='refresh' src={Refresh} alt="..." onClick={handleRefresh}/>
  <button className='btn btn-success' onClick={handleNew}>Add New</button>
  </>
  }
  />
  <div className='row d-flex mr-5 justify-content-end '>
    <button className='btn text-white' id='delteBtn' onClick={handleDelete}>Delete</button>
  </div>  
    </>
  )
  
  
}

