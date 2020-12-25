import React from "react"
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from './routes/Home'
import SignUp from './routes/SignUp'
import Login from './routes/Login'
import { AuthProvider } from './Auth'
import PrivateRoute from './PrivateRoute'

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App;
