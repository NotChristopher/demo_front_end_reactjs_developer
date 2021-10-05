import './App.css';
import Signup from "./components/Signup-from";
import * as React from 'react';
import DashBoard from './components/Dashboard';
import { Switch, Route} from "react-router-dom";
import Nav from './components/NavBar';
import NewsFeed from './components/NewsFeed';
import Profile from './components/Profile';
import Settings from './components/Settings';
import Explore from './components/Explore';


function App() {
  return (
    <div className="App">
     
     
     <Nav />
      <Switch>
        <Route path="/" exact>
        
        <DashBoard />
        <NewsFeed />
        </Route>
        <Route path="/Profile" component={Profile} />
        <Route path="/Explore"  component = {Explore} />
        <Route path="/Settings" component = {Settings} >
          
        </Route>
        
      </Switch>
     
    </div>
  );
}

export default App;
