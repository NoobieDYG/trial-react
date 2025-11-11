import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import MovieCard from './components/MovieCard'
import Home from './pages/Home.jsx'
import Favorite from './pages/Favourites.jsx'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import { MovieProvider } from './contexts/MovieContext.jsx'
function App() {
  
  

  return (
    <MovieProvider>
      <NavBar></NavBar>
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/favourites' element={<Favorite></Favorite>}></Route>
      </Routes>
    </main>
    </MovieProvider>
  )
}


export default App
