import './App.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router } from "react-router-dom"
import Navbar from './components/Navbar';
import Gallery from './components/Gallery'
import Hero from './components/Hero';
import WorkoutSession from './components/WorkoutSession';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import BMICalculator from './components/BMICalculator';
import Footer from './components/Footer';

function App() {
  

  return (
    <Router>
    <Navbar/>
    <Hero/>
    <WorkoutSession/>
    <Gallery/>
    <Pricing/>
    <Contact/>
    <BMICalculator/>
    <Footer/>
    <ToastContainer theme='dark' position='top-center'/>
    
    </Router>
  )
}

export default App
