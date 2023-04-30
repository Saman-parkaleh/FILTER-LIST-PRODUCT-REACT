import React from 'react'






function Menu({items}) {
  return ( 
   <div className='flex  m-5 grid grid-cols-2  items-center '>
      {
         items.map((item)=>{
            const {id,img,title,price,desc}=item;
            return(
            <section key={id} 
             className='flex items-center flex-col bg-blue-200 m-10 w-[250px] border  p-5 '>
               <img src={img} alt={title}  className=' object-scale-down w-96 h-32'/>
               <header>
                   <h1>{title}</h1>
               <h5>{price}</h5>
               </header>
               <p>{desc}</p>
               </section>

            )
         })
      }

   </div>
    
  )
}

export default Menu