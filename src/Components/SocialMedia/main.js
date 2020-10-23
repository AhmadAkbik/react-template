import React,{useState,useEffect}  from 'react';
import {Socialmedia1,Social,Icon,SocialDesc,Span,SpanInfo} from './style.js'
import axios from 'axios'

const SocialMedia = () => {
    const [icon , setIcon] = useState([]);
    useEffect( () => {
        axios.get('Data/data.json').then( res => {setIcon(res.data.social)} )
    } , []) 

    const SocialIcon = icon.map( (iconItem) => {
        return (
            <Social item={iconItem.id} key={iconItem.id}>
                <Icon className={iconItem.icon}></Icon>
                <SocialDesc>
                    <Span class="info1">{iconItem.title}</Span>
                    <SpanInfo class="info2">{iconItem.body}</SpanInfo>
                </SocialDesc>
            </Social>
        )
    })

    return (
        <Socialmedia1>
            {SocialIcon}
        </Socialmedia1>
      )
}

export default SocialMedia;