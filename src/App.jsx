import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './components/Pages/Home/HomePage';
import Course from './components/Pages/Courses/CoursePage';
import About from './components/Pages/About/AboutPage';
import PricingPage from './components/Pages/Pricing/PricingPage';
import Contact from './components/Pages/Contact/ContactPage';
import SignUp from './components/Pages/SignUp/SignUppage';
import Login from './components/Pages/Login/LoginPage';
export default function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/courses' element={<Course />}/>
          <Route path='/about us' element={<About />}/>
          <Route path='/pricing' element={< PricingPage/>}/>
          <Route path='/contact' element={< Contact/>}/>
          <Route path='/Sign Up' element={< SignUp/>}/>
          <Route path='/Log In' element={<Login />}/>
        </Routes>
      </div>
    </>
  )
}