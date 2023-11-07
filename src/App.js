
import './App.css';
import {Route,Routes } from 'react-router-dom'
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
   <Navbar/>
    <Routes>
      <Route path='/'  element={<Home/>}/>
      <Route path='/menu'  element={<Menu/>}/>
      <Route path='/about'  element={<About/>}/>
      <Route path='/contact'  element={<Contact/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
