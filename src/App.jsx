import React from 'react'
import { BrowserRouter,Route,Routes, useNavigate } from "react-router-dom"
import NgoDetail from './Components/ngoDetails'
import Homepage from './Components/homepage'
import Header from './Components/header'
import Blog from './Components/blog'
import CreatePost from './Components/createPost'
import Login from './Components/login'
import Form from './Components/form'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/:idn" element={<NgoDetail/>} />
          <Route path="/volunteer" element={<Form/>}/>
          <Route path="/blogs" element={<Blog/>} />
          <Route path="/blogs/createpost" element={<CreatePost/>} />
          <Route path="/blogs/login" element={<Login/>} />
        </Routes>    
      </BrowserRouter>
    </div>
  )
}

export default App