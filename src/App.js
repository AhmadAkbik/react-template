import React, { Component } from 'react';
import { BrowserRouter , Route} from 'react-router-dom'
import Contact from './Components/Contact/main';
import NavBar from './Components/NavBar/main';
import Main from './Components/Main/main';


class App extends Component{
  render(){
    return (  
      <BrowserRouter>
        <NavBar/>
        <Route exact  path = '/' component = {Main}/>
        <Route path = '/Contact' component = {Contact}/>
      </BrowserRouter>
    )
  }
}

export default App;
