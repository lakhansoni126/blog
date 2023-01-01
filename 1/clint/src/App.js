import React from 'react'
import {Route, Routes} from "react-router-dom"
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';

export const App = () => {
  return <>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/" element={<Home/>}/>
    </Routes>

  </>
}


export default App;