import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
// prsh
// import Routess from './components/routt addes/Routess'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/pages/About'
import Product from './components/product/Product'
import Features from './components/features/Features'
import Portfolio from './components/portfolio/Portfolio'
import All from './components/portfolio/All'
import Register from './components/authentication/Register'
import Log from './components/authentication/Log'
import Blog from './components/blog/Blog'
import Cart from './components/Home/Cart'
import Shop from './components/shop/Shop'
import {Provider} from 'react-redux'
import store from './components/Home/store/store'
import Contact from './components/pages/Contact'
import Faq from './components/pages/Faq'
import LookBook from './components/pages/LookBook'
import SearchBar from './components/pages/SearchBar'



const App = () => {
  return (
    <div className='w-full h-screen'>
       <Provider store={store}> 
      <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/shope' element={<Shop/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/features' element={<Features/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='portfolio' element={<Portfolio/>}/>
          <Route path='/all' element={<All/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Log/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/faq' element={<Faq/>}/>
          <Route path='/lookbook' element={<LookBook/>}/>
          <Route path='/search' element={<SearchBar/>}/>
        </Routes>
        <Footer/>
      </Router>
      </Provider> 
       
      
      
     
      
     
    </div>
  )
}

export default App