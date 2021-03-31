import React ,{useState,useEffect} from 'react'
import './styles/App.css';
import { Route,Switch } from "react-router-dom";
import Nav from './components/Nav'
import Home from './components/Home'
import News from './components/News'
import SpareParts from './components/SpareParts'
import Profile from './components/Profile'
import Service from './components/Service'
import Login from './components/Login';
import Admin_Page from "./components/Admin_Page";
import { auth , provider } from './firebase'
import { useStateValue } from './StateProvider';

const App = () => {
    const [{}, dispatch] = useStateValue();
    useEffect(() => {
        auth.signInWithPopup(provider).then(result => {
            dispatch({
                type : 'SET_USER',
                user : result.user
            })
        })
    }, [])
  return(
    <>
      <Nav/>
      <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route exact path="/News">
              <News/>
          </Route>
          <Route exact path="/SpareParts">
              <SpareParts/>
          </Route>
          <Route exact path="/Profile">
              <Profile/>
          </Route>
          <Route exact path="/Service">
              <Service/>
          </Route>
          <Route exact path="/Login">
              <Login/>
          </Route>
          <Route exact path="/Admin">
               <Admin_Page/>
          </Route>
      </Switch>
    </>
  );
};

export default App;