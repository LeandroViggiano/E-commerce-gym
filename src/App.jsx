import React from 'react';
import Navbar from './components/Navbar/Navbar';
import ItemCount from './components/ItemCount/ItemCount'
import ItemList from './components/ItemList/ItemList'
/*import Carrusel from './components/Carrusel/Carrusel';   <Carrusel />*/

function App() {
  return (
    <>
      <Navbar />     
      <ItemCount stock={10}/>
      <ItemList/>
    </>
  );
}

export default App;