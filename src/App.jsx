import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Search from './pages/Search'
import Series from './pages/Series'
import './styles/App.css'

const App = () => {
  return (
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/series' element={<Series/>}></Route>
    <Route path='/detail/:id' element={<Detail/>}/>
    <Route path='/search/:movie' element={<Search/>}/>
  </Routes>
  )
 
}

export default App
