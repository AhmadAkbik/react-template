import React  from 'react';
import {Creative,Creativeinfo,Infotitle,Span,Infodir,Infodesc,Infodescahref} from './style.js'

const About = () => {
    return (
      <Creative>
        <div class="container">
            <Creativeinfo>
                <Infotitle><Span>This is</Span> Me</Infotitle>
                <Infodir>Creative Director</Infodir>
                <Infodesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <Infodescahref href="#">explicabo</Infodescahref> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                </Infodesc>
                <Infodesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                </Infodesc>
            </Creativeinfo>
        </div>
      </Creative>
  
      )
}

export default About;