import React from 'react'

function Categories({categories, filteritems}){
  return (
    <div className=''>
            {
         categories.map((category,index) =>{
            return(
               <button className='m-5 text-blue-700'  key={index}  onClick={()=> filteritems(category) }  >{category}</button>
            )
         })
      }
    </div>
  )
}

export default Categories