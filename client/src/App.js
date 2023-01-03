import {  BrowserRouter,Route, Routes} from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AddBlog from "./Pages/AddBlog";
import AddCateogry from "./Pages/AddCateogry";
import SingleBlog from "./Pages/SingleBlog";


function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/> 
      <Route path="/add-blog" element={<AddBlog/>}/> 
      <Route path="/add-category" element={<AddCateogry/>}/> 
      <Route path="/blog/:id" element={<SingleBlog/>}/> 
      
    
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
