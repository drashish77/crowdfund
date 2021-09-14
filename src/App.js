// import logo from '../images/image-hero-desktop.jpg'
import './App.css'
import Header from './components/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './components/Home'
function App() {
  return (
    <Router>
      <Header />
      <Route path='/'>
        <Home />
      </Route>
    </Router>
  )
}

export default App
