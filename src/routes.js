import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Hero from './components/pages/Hero'
import Home from './components/pages/Home'
import Leistungen from './components/pages/Leistungen'
import Ambulante from './components/pages/Ambulante'
import Jobs from './components/pages/Jobs'
import Contact from './components/Contact'
import Gallery from './components/pages/Gallery'

const Routes = () => {
  return (
    <Router onUpdate={() => window.scrollTo(0, 0)}>
      <Navbar />
      <Hero />
      <Switch>
        <Route path='/' component={Home} exact></Route>
        <Route path='/leistungen' component={Leistungen}></Route>
        <Route path='/ambulantepflege' component={Ambulante}></Route>
        <Route path='/jobs' component={Jobs}></Route>
      </Switch>
      <Contact />
    </Router>
  )
}

export default Routes
