import { Check } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Pricing = () => {
  const pricing = [
    {
      imgUrl:"/pricing.jpg",
      title:"QUATERLY",
      price:18000,
      length:3
    },
    {
      imgUrl:"/pricing.jpg",
      title:"Half  Yearly",
      price:28000,
      length:6
    },
    {
      imgUrl:"/pricing.jpg",
      title:"Yearly",
      price:48000,
      length:12
    },
  ]
  return (
    <section className='pricing'>
      <h1>ELITE EDGE FITNESS PLAN</h1>
      <div className='wrapper'>
        {
          pricing.map(element=>{
            return(

            <div className='card' key={element.title}>
              <img src={element.imgUrl} alt={element.title} />
              <div className='title'>
              <h1>{element.title}</h1>
              <h1>PACKAGE</h1>
              <h3>Rs {element.price}</h3>
              <p>For {element.length} Months</p>
      </div>
              <div className='description'>
                <p>
                  <Check/> Equipement
                </p>
                <p>
                  <Check/> All Day For Training
                </p>
                <p>
                  <Check/>Free RestRoom
                </p>
                <p>
                  <Check/> 24/7 skilled Support
                </p>
                <p>
                  <Check/> 20 days Freezig option
                </p>
                <Link to={"/"}>Join Now</Link>
              </div>
            </div>)
          })
        }
      </div>
    </section>
  )
}

export default Pricing