import React, {useState} from 'react';
import Menu from './components/Menu';
import items from './components/Items';
import Categories from './components/Categories';


function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);


  return (
    <>
      <header>
        <h1 className='text-center mt-5 mb-3'>BoozyMelt Menu</h1>
        <div className='gradient-line text-center m-auto'></div>
      </header>
      <Categories />
      <Menu items={menuItems}/>

    </>
  );
}

export default App;
