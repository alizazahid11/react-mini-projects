import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import {
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';
import './webpage.css';
import About from './About';
import Details from './Details';
import Contact from './Contact';
const Home = ({ setMessage }) => (
 
    <h2>Home</h2>

);



const MoreInfo = () => <h2>More Info</h2>;


const Example=() =>{
  const [msg, setMsg] = useState('');


  return (
    <Router>
      <>
        <img src="https://cdn-icons-png.flaticon.com/512/7835/7835563.png" className='image-icon' alt="icon" />
        <Nav className='navv'>
          <NavItem>
            <NavLink as={Link} to="/" className='sec'>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink as={Link} to="/about" className='sec'>
              About Us
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink as={Link} to="/contact" className='sec'>
              Contact
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink as={Link} to="/details" className='sec'>
              Details
            </NavLink>
          </NavItem>
        </Nav>

        <div className='hea-para'>
          <h1 className='header-title'>Shopping ABC</h1>
          <p className='header-paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt suscipit itaque veniam! Nemo, nostrum ad et odit expedita iusto fuga minus pariatur alias! Dicta eum eveniet excepturi, architecto veniam dolorum asperiores nisi, earum quo maxime officia aspernatur esse tempora autem accusantium! Delectus dolores quod neque?</p>
        </div>

        <img src="./images/web.png" className='web-img' alt="web" />

        <div>
          <Button color="primary" className='btn'>
        
            <Link to="/more-info" className='link'>Click Here for more info</Link>
          </Button>
        </div>

        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/details" element={<Details />} />
          <Route path="/more-info" element={<MoreInfo />} />
        </Routes>
        <div>
        <h2 className='intro'> Hi my name is Aliza {msg}</h2>
        <button onClick={() => setMsg("I'm a CS student") } className='set-message-btn'>Show more..</button></div>
      </>
    </Router>
    
  );
}

export default Example;
