import React, { Component } from 'react';
import About from './../About/main';
import Footer from './../Footer/main';
import Home from './../Home/main';
import Portfolio from './../Portfolio/main';
import Profile from './../Profile/main';
import SocialMedia from './../SocialMedia/main';
import Work from './../Work/main';



class Main extends Component{
  render(){
    return (
      <div>
        <Home/>
        <Work/>
        <Portfolio/>
        <Profile/>
        <About/>
        <SocialMedia/>
        <Footer/>
      </div>
    )
  }
}

export default Main;
