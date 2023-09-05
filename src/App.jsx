import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Search from './pages/Search'
import Movies from './pages/Movies'
import Series from './pages/Series'

const App = () => {
  return (
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/movies' element={<Movies/>}></Route>
    <Route path='/series' element={<Series/>}></Route>
    <Route path='/detail/:productId' element={<Detail/>}/>
    <Route path='/search/:movie' element={<Search/>}/>
  </Routes>
  )
 
}

export default App
