import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Link, Routes} from 'react-router-dom'
import NavBar from './components/navBar'
import Home from './components/home'
import Create from './components/create'
import Gallery from './components/gallery'
import Update from './components/update'


function App() {
  

  return (
    <div className="App">
      
    

      <BrowserRouter>
        <Routes>
      
          <Route path='/'  element={ <NavBar />}>
            <Route path="/" index={true} element={<Home />} />
          </Route>
          <Route path='/'  element={ <NavBar />}>
            <Route path="/create" index={false} element={<Create />} />
          </Route>
          <Route path='/'  element={ <NavBar />}>
            <Route path="/gallery" index={false} element={<Gallery />} />
          </Route>

          <Route path='/'  element={ <NavBar />}>
            <Route path="/gallery/:id/edit" index={false} element={<Update />} />
          </Route>
        
        </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App
