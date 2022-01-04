import React, { useEffect } from 'react';
import Navbar from './layouts/Navbar';
import Landing from './views/Landing';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from './components/Register';
import Login from './views/Login';
import Home from './views/Home';
import PrivateRoute from "./components/higher_order_component/PrivateRoute";
import UnPrivateRoute from "./components/higher_order_component/UnPrivateRoute";
import myprofile from './components/user/myprofile';
import addaBook from './components/user/addaBook';
import mybooks from './components/user/mybooks/bookList';
import oderNewBook from './components/user/oderNewBook/bookList';
import orderedBooks from './components/user/orderedBooks';
import { getallcategories } from './features/categories/categoriesSlice';
import { getalllanguages } from './features/Languages/languagesSlice';
import { useDispatch } from 'react-redux';
import { getallbook } from './features/Books/bookSlice';
function App() {
  
  const dispatch = useDispatch()
    
  useEffect(() => {
    dispatch(getallcategories())
    dispatch(getalllanguages())
    dispatch(getallbook())
   
  }, [])
 
  return (

    <div>
      <Router>
        <Navbar />
        <Switch>
          <PrivateRoute role={["Reader","Library","Author"]} path="/myprofile" component={myprofile} />
          <PrivateRoute role={["Reader","Library","Author"]} path="/addbook" component={addaBook} />
          <PrivateRoute role={["Reader","Library","Author"]} path="/myListOfbooks" component={mybooks} />
          <PrivateRoute role={["Reader","Library","Author"]} path="/odernewbook" component={oderNewBook} />
          <PrivateRoute role={["Reader","Library","Author"]} path="/myorderedbooks" component={orderedBooks} />
          <PrivateRoute role={["Reader","Admin","Library","Author"]} path="/home" component={Home} />
          <UnPrivateRoute path="/Login" component={Login} />
          <UnPrivateRoute path="/Register" component={Register} />
          <Route  path="/" component={Landing} />
        </Switch>

      </Router>
    </div>)

}
export default App;