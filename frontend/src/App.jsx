import React from 'react'
import Home from './Pages/Home'
import { Routes,Route } from 'react-router-dom'
import Application from './Pages/Application'
import HunterIoPage from './Pages/HunterIoPage'
import NetlasPage from './Pages/NetlasPage'
import VirusTotalPage from './Pages/VirusTotalPage'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/application' element={<Application/>}> 
        <Route path="/application" element={<HunterIoPage/>} />
        <Route path='/application/netlas' element={<NetlasPage/>} />
        <Route path='/application/virustotal' element={<VirusTotalPage/>} />
      </Route>
    </Routes>
  )
}

export default App