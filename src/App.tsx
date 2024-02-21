import Footer from './layout/Footer'
import Header from './layout/Header'
import CardCarousel from './components/Cardbanner'
import Morecard from './components/MoreCard'
import Metalrogue from './components/Metalrogue'

import Home from './pages/Home'
import Navegar from './pages/Navegar'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Card } from 'react-bootstrap'

export function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/navegar' element={<Navegar />} />
      </Routes>
      <CardCarousel />
      < Morecard/>
      < Metalrogue />
      <Footer />
    </Router>
  )
}
