import React  from 'react';
import {HomeSection , HomeInformation , HomeTitle , HomeInfo , HomeDesc , Span , HomeBtn} from './style.js'

const Home = () => {
    return (
        <HomeSection>
            <div className="container">
                <HomeInformation>
                    <HomeTitle>AHMAD AKBIK</HomeTitle>
                    <HomeInfo>Front End Developer</HomeInfo>
                    <HomeDesc>
                        Iam a professional <Span>Front-End Developer</Span> creating modern and resposive designs to Web . Let us work together. Thank you. 
                    </HomeDesc>
                    <HomeBtn>Let's Begin</HomeBtn>
                </HomeInformation>
            </div>
        </HomeSection>
      )
}

export default Home;