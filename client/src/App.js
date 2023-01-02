import {  BrowserRouter,Route, Routes} from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";


function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/> 
    
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
