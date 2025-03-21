import React from 'react'
import Area from './Components/area'
import NgoCard from './Components/ngoCard'
import { BrowserRouter,Route,Routes, useNavigate } from "react-router-dom"
import Demo from './Components/demo'
import NgoDetail from './Components/ngoDetails'
import Homepage from './Components/homepage'
import Header from './Components/header'
import Footer from './Components/footer'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/:idn" element={<NgoDetail/>} />
        </Routes>
        <Area/>
        <Footer/>    
      </BrowserRouter>
        {/* <Demo/> */}
    </div>
  )
}

export default App