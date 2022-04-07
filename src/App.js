import React, { useEffect } from 'react';
import Navbar from './layouts/Navbar';
import Landing from './views/Landing';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from './components/Register';
import Login from './views/logiin';
import Home from './views/Home';
import PrivateRoute from "./components/higher_order_component/PrivateRoute";
import UnPrivateRoute from "./components/higher_order_component/UnPrivateRoute";

function App() {


  return (

    <div>
      <Router>
        <Navbar />
        <Switch>
          <UnPrivateRoute path="/Login" component={Login} />
          <UnPrivateRoute path="/Register" component={Register} />
          <Route path="/" component={Landing} />
        </Switch>

      </Router>
    </div>)

}
export default App;