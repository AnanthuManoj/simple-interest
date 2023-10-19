import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import './App.css';
import { useState } from 'react';


function App() {
  const[principle,setPrinciple]=useState(0)
  const[interest,setInterest]=useState(0)
  const[rate,setRate]=useState(0)
  const[year,setYear]=useState(0)
  const[isPrinciple,setIsPrinciple]=useState(true)
  const[isRate,setIsRate]=useState(true)
  const[isYear,setIsYear]=useState(true)


 const getValidated=(evnt)=>{
     const{name,value} = evnt.target
       if(!!value.match(/^[0-9]*.?[0-9]+$/)){//!! is given to get the value in true or false
          if(name==='Principle'){
            setPrinciple(value)
            setIsPrinciple(true)   
          }else if(name==='Rate') {
            setRate(value)
            setIsRate(true)
          }else if(name==='Year') {
            setYear(value)
            setIsYear(true)
          }                  
       }else{
         if(name==='Principle'){
          setPrinciple(value)
          setIsPrinciple(false)
         }else if(name==='Rate'){
          setRate(value)
          setIsRate(false)
         }else if(name==='Year'){
          setYear(value)
          setIsYear(false)
         }
        }
        
  }

const handleSubmit = (ev) =>{
    ev.preventDefault();
  if(principle || rate || year){
     setInterest(principle*rate*year/100)
  }else{
    alert('Please fill all fields!');
  }
}

const handleReset = (evnt) =>{
  setPrinciple(0)
  setInterest(0)
  setRate(0)
  setYear(0)
  setIsPrinciple(true)
  setIsRate(true)
  setIsYear(true)
}

  return (
    <div className='d-flex justify-content-center align-items-center bg-dark' style={{height:'100vh'}}>

        <div className='bg-light p-5 rounded text-center '>
          <h1 className='fw-bold'>Simple interest</h1>
          <p>Calculate Simple interest Easily</p>

          <div className='bg-warning d-flex justify-content-center align-items-center flex-column p-4 rounded shadow'>
            <h1>₹{' '} {interest} </h1>
            <p className='lead'>Total Simple Interest</p>
          </div>

          <form className=' mt-5' onSubmit={handleSubmit}>

            <div className='mb-3 '>
            <TextField className='w-100' name='Principle' onChange={(evnt)=>getValidated(evnt)} value={principle||""} id="outlined-basic" label="₹ Principle Amount" variant="outlined" />
            </div>
            {!isPrinciple&&
            <div className='d-flex flex-start'>
                <p className='text-danger fw-bolder'>*Invalid input</p>
            </div>}

            <div className='mb-3 '>
            <TextField className='w-100' name='Rate' onChange={(evnt)=>getValidated(evnt)} value={rate||""} id="outlined-basic" label="Rate of Interest (p.a)%" variant="outlined" />
            </div>
            {!isRate&&
            <div className='d-flex flex-start'>
                <p className='text-danger fw-bolder'>*Invalid input</p>
            </div>}

            <div className='mb-3 '>
            <TextField className='w-100' name='Year' onChange={(evnt)=>getValidated(evnt)} value={year||""} id="outlined-basic" label="Year (yr)" variant="outlined" />
            </div>
            {!isYear&&
            <div className='d-flex flex-start'>
                <p className='text-danger fw-bolder'>*Invalid input</p>
            </div>}

            <Stack direction="row" spacing={2}>
            <Button type='submit' disabled={isPrinciple&&isRate&&isYear?false:true} className='bg-success' style={{width:'200px',height:'50px'}} variant="contained">Calculate</Button>
            <Button onClick={handleReset} variant="outlined"  style={{width:'200px',height:'50px'}}>Reset</Button>
            </Stack>

          </form>

          </div>
    </div>
  );
}

export default App;
