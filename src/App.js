
import './App.css';
import {Route,Routes } from 'react-router-dom'
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Blog from './components/Blog';
 import Footer from './components/Footer'
import Certificate from './components/Certificate';
import Education from './components/Education';

function App() {
  return (
    <div className="App">
   <Navbar/>
    <Routes>
      <Route path='/'  element={<Home/>}/>
      <Route path='/menu'  element={<Menu/>}/>
      <Route path='/about'  element={<About/>}/>
      <Route path='/contact'  element={<Contact/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/certificate' element={<Certificate/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/education' element={<Education/>}/>
    </Routes>
    <Footer/> 
    </div>
  );
}

export default App;
