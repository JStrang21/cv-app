import React, { Component } from 'react';
import Personal from './Personal.js';
import Education from './Education.js';
import Work from './Work.js';


class App extends Component{
    constructor() {
        super()

        this.state = {
            personal: "",
            education: [<Education />],
            work: "",
        }
    }

    //If no data then display input
    //Then save data and display in cleaner format without inputs-leave edit button
    handlePersonal = (personalData) => {
        this.setState({
            personal: personalData,
        })
    }

    //If no data then display inputs
    //Then save data and display in cleaner format without inputs-leave edit button for one education
    //Leave add button so user can add another education form
    //Same for work experience
    handleEducation = (educationData) => {
        this.setState({
            education: [...this.state.education, educationData],
        })
    }

    handleWork = (workData) => {
        this.setState({
            work: workData,
        })
    }

    handlePersonalSave = () => {
        this.setState({
            personalToggle: 1
        })
    } 

    addEducation = () => {
        this.setState({
            education: [...this.state.education, <Education />]
        })
    }

    deleteEducation = (e) => {
        console.log(e.target)
        
    }

    render() {
        const { personal, personalToggle, education, work} = this.state;

        let educationList = education.map((item, i) => {
            return <div>{item}</div>
        })

        return (
            <div>
                <Personal flag={this.deleteEducation}/>
                {educationList}
                {/*
                <Education educationInput={this.handleEducation}/>
                */}
                <button onClick={this.addEducation}>Add</button>

                <Work workInput={this.handleWork}/>
                
                <button onClick={() => {
                    console.log(this.state.education)
                }}>Test Submit</button>
            </div>
        )
    }
}

export default App
