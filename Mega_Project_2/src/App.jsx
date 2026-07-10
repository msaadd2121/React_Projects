import { useState } from 'react'
import { Routes, Route,BrowserRouter} from 'react-router-dom'
import Home from './components/Home/Home'
import Services from './components/Work/Work'
import Our_Work from './components/Our_Work/Our_Work' 
import Contact_Us from './components/Contact_Us/Contact_Us'
import Layout from './components/Layout/Layout'
import Header from './components/Header/Header'


function App() {
 // const [theme, setTheme] = useState("light")

  return (
    <>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="work" element={<Our_Work />} />
          <Route path="contact" element={<Contact_Us />} />
        </Route>
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
