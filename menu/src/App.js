import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import { renderIntoDocument } from 'react-dom/test-utils';


//to get unique categeories from list

const allCategories = ['all',...new Set(items.map((item)=> item.category))]


function App() {
  const[menuItems,setMenuItems] = useState(items);
  const [categories,setCategories] = useState(allCategories);


  const filterItems = (category) =>{
    //if category is all set back to original list
    if(category === 'all'){
      setMenuItems(items)
      return;
    }
    const newItems= items.filter((item) => item.category === category)
    setMenuItems(newItems)

  }

  return <main>
  <section className='menu section'>
  <h2>our menu</h2>
  <div className='underline'>
  
  </div>
  <Categories categories={categories} filterItems={filterItems}/>
  <Menu items={menuItems}/>
  </section>
  </main>
}

export default App;
