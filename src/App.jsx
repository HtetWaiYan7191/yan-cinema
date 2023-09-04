import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Search from './pages/Search'

const App = () => {
  return (
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/detail/:productId' element={<Detail/>}/>
    <Route path='/search/:movie' element={<Search/>}/>
  </Routes>
  )
 
}

export default App
