import React from 'react'

const Gallery = () => {
  const gallery =["/img5.jpg","/img2.jpg","img3.jpg","/img4.jpg","img7.jpg","img8.jpg","img5.jpg","img5.jpg"]
  return (
   <section className='gallery'>
    <h1>BETTER BE BEST</h1>
    <div className='images'>
    <div>
      {
        gallery.slice(0,3).map((element,index)=>{
         return <img key={index} src={element} alt='images'/>

        })
      }</div>
    <div>
      {
        gallery.slice(4,7).map((element,index)=>{
         return <img key={index} src={element} alt='images'/>

        })
      }</div>
    <div>
      {
        gallery.slice(7,10).map((element,index)=>{
         return <img key={index} src={element} alt='images'/>

        })
      }</div>
    </div>
   </section>
  )
}

export default Gallery