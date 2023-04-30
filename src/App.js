import React, { useState } from 'react'
import Menu from './Components/Menu/Menu';
import './App.css';
import Categories from './Components/Categories/Categories';
import items from './Components/data';



const allCategories = ['همه', ...new Set(items.map((item) => item.category))];
console.log(allCategories)

function App() {
 const [menuitem,setMenuitem]=useState(items) ;
 const [categories , setCategories] = useState(allCategories)


 const filteritems=(category)=>{
  if( category ==="همه"){
    setMenuitem(items);
    return;
  }
 const newitems =items.filter((item)=> item.category === category);
 setMenuitem(newitems)

 }


  return (
    <div className="contaner flex flex-col items-center">
      <div>
        <header>
          <h1 className='mt-5'> محصولات ما </h1>
          <div className=' bg-blue-500 h-[3px] mt-2'></div>
        </header>
              </div>
              <Categories filteritems={filteritems} categories={categories} />
              <Menu items={menuitem}/>

    </div>
  );
}

export default App;
