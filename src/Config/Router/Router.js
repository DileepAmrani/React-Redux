import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from '../../Container/Home/Home'
import About from '../../Container/About/About'
import Contact from '../../Container/Contact/Contact'

function AppRouter() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/about/" component={About} />
          <Route path="/contact/" component={Contact} />
        </div>
      </Router>
    );
  }
  
  export default AppRouter;