import React, { useState } from 'react'
import { toast } from 'react-toastify'

const BMICalculator = () => {
  const [height,setHeight] = useState('')
  const [weight,setWeight] = useState('')
  const [gender,setGender] = useState('')
  const [bmi,setBmi] = useState('')

  const calculateBMI=(e)=>{
    e.preventDefault()
    if(!height||!weight||!gender){
      toast.error("Please enter the Information ")
      return;
    }

    const heightInMeters = height/100;
    const BMIvalue =(weight/(heightInMeters*heightInMeters)).toFixed(2)
    setBmi(BMIvalue)

    if(BMIvalue<18.5){
      toast.warning("You are under weight .Consider Seaking advice for a Health Care Provider")


    }
    else if(BMIvalue>=18.5 || BMIvalue<24.9){
      toast.success("You Have Normal Weight")
    }
    else if(BMIvalue>=25 || BMIvalue<29.9){
      toast.warning("You are over Weight  ")
    }
    else{
      toast.warning("Your are obese range ")
    }







  }


  return (
    <section className='bmi'>
      <h1>BMI CALCULATOR</h1>
      <div className='container'>
        <div className='wrapper'>
          <form onSubmit={calculateBMI}>
          <div>
            <label>Height (cm)</label>

            <input type='number ' value={height} onChange={(e)=>setHeight(e.target.value
            )} />
            </div>
          <div>
            <label>Weight (kg)</label>

            <input type='number ' value={weight} onChange={(e)=>setWeight(e.target.value
            )} />
          </div>
          <div>
            <label>Gender</label>

            <select value={gender} onChange={(e)=>setGender(e.target.value)}>
            <option value="">Select Gender</option>
            <option value="male"> Male</option>
            <option value="female">Female</option>
            </select>
          </div>
          <button  type='submit'>Calculate BMI</button>
          </form>
        </div>
        <div className='wrapper'>
          <img src='/bmi.jpg' alt='BMIImage'/>
        </div>
      </div>
    </section>
  )
}

export default BMICalculator