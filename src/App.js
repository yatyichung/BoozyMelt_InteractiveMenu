import React, {useState} from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import items from './components/Items';
import Categories from './components/Categories';

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);


  return (
    <>
      <Header />
      <Categories />
      <Menu items={menuItems}/>

    </>
  );
}

export default App;
