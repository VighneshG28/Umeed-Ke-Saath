import React from 'react'
import Area from './Components/area'
import NgoCard from './Components/ngoCard'
import { BrowserRouter,Route,Routes, useNavigate } from "react-router-dom"
import Demo from './Components/demo'
import NgoDetail from './Components/ngoDetails'
import Homepage from './Components/homepage'
import Header from './Components/header'
import PageDetailsOne from './Components/pageDetailsOne'
import PageDetailsTwo from './Components/pageDetailsTwo'
import PageDetailsThree from './Components/pageDetailsThree'
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
        <PageDetailsOne/>
        <PageDetailsTwo/>
        <PageDetailsThree/>
        <Area/>
        <Footer/>    
      </BrowserRouter>
        {/* <Demo/> */}
    </div>
  )
}

export default App