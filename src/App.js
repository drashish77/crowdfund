// import logo from '../images/image-hero-desktop.jpg'
import './App.css'
import Header from './components/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './components/About'
import Discover from './components/Discover'
import Home from './components/Home'
import GetStarted from './components/GetStarted'
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/discover'>
          <Discover />
        </Route>
        <Route path='/started'>
          <GetStarted />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
