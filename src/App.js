import {useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Shop from './page/Shop';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Details from './page/Details';
import Cart from './components/Cart';

function App() {

  const [tag, setTag] = useState("tous les articles")
  const value = {tag, setTag}

  return (
    <div className="App">
      <NavBar/>
      <Cart/>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/shop' Component={Shop}/>
        <Route path='/shop/:id' Component={Details}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
