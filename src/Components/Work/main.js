import React, {Component} from 'react';
import { WorkSection, WorkTitle, Span, Part, Icon, ConstParTtitle, Line, PartDesc} from  './style.js'
import axios from 'axios'

class Work extends Component {
    state = {
        works : []
    }
    componentDidMount() {
        axios.get('Data/data.json').then( res => {this.setState({works : res.data.works})} )
    }
    render(){
        const {works} = this.state;
        const worksList = works.map((workItem) => {
            return(
                <Part key ={workItem.id}>
                        <Icon className={workItem.icon_name}></Icon>
                        <ConstParTtitle>{workItem.title}</ConstParTtitle>
                        <Line className="line"/>
                        <PartDesc>
                            {workItem.body}
                        </PartDesc>
                    </Part>
            )
        });
        return (
            <WorkSection>
                <div className="container">
                    <WorkTitle><Span>My</Span> Work</WorkTitle>
                    {worksList}
                </div>
            </WorkSection>
          )
    } 
}
export default Work;