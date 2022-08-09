import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import About from './components/About'
import Checkout from './components/Checkout';
import Exit from './components/Exit';
import './App.css';
import { Provider } from 'react-redux';
import store from './store.js';
import { Route, Routes} from 'react-router-dom';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
     
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/exit" element={<Exit/>} />
        </Routes>
      
      </div>
    </Provider>
  );
} 
export default App;