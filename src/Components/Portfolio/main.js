import React , {useState,useEffect}  from 'react';
import {PortfolioSection , Portfoliotitle ,Portfoliolist , Portfolioitem , Span, Overlay,Overlayspan,ImageWrapper,Image} from'./style.js'
import axios from 'axios'
// import Data from "./Data/data.json";

const Portfolio = () => {
    // React Hooks
    const [ images , setImages ] = useState([])
    // componentDidMount
    useEffect( () => {
        axios.get('Data/data.json').then( res => {setImages(res.data.portfolio)} )
    } , [] )

    const PortfolioImages = images.map((imageItem) => {
        // const Data =require("./Data")
        // console.log(Data)
        // Data.portfolio.image
        return(
            <ImageWrapper key={imageItem.id}>
                <Image src={imageItem.image} alt=""/>
                <Overlay>
                    <Overlayspan>
                        Show Image
                    </Overlayspan>
                </Overlay>
            </ImageWrapper>
        )
    })
    return (
    <PortfolioSection>
        <Portfoliotitle><Span>My</Span> Portfolio</Portfoliotitle>
        <Portfoliolist>
            <Portfolioitem active>All</Portfolioitem>
            <Portfolioitem>HTML5</Portfolioitem>
            <Portfolioitem>CSS3</Portfolioitem>
            <Portfolioitem>Bootstrap</Portfolioitem>
            <Portfolioitem>Java script</Portfolioitem>
        </Portfoliolist>
        <div class="box">
           {PortfolioImages }
        </div>
        
    </PortfolioSection>
       
  
      )
}

export default Portfolio;