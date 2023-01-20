import React, { Component } from 'react';
import Personal from './Personal.js';
import Education from './Education.js';
import Work from './Work.js';
import uniqid from 'uniqid';


class App extends Component{
    constructor() {
        super()

        this.state = {
            personal: "",
            education: [<Education/>],
            work: [<Work/>],
        }
    }

    //If no data then display input
    //Then save data and display in cleaner format without inputs-leave edit button
    handlePersonal = (personalData) => {
        this.setState({
            personal: personalData,
        })
    }

    handleWork = (workData) => {
        this.setState({
            work: [...this.state.work, workData],
        })
    }

    addWork = () => {
        this.setState({
            work: [...this.state.work, <Work/>]
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

    addEducation = () => {
        this.setState({
            education: [...this.state.education, <Education />]
        })
    }

    deleteEducation = i => {
        const newList = this.state.education.splice(i, 1);
        this.setState({
            education: [newList],
        })
        /*let newList = this.state.education.filter((item) => item.key !== i);
        this.setState({
            education: [newList]
        })*/
    }

    deleteWork = i => {
        const newList = this.state.work.splice(i, 1);
        this.setState({
            work: [newList],
        })
    }

    handlePersonalSave = () => {
        this.setState({
            personalToggle: 1
        })
    } 

    flag = (e) => {
        console.log(e)
    }

    render() {
        const { personal, personalToggle, education, work} = this.state;

        let educationList = education.map((item, i) => {
            return (<div key={i}>
                        <Education key={i}>{item}</Education>
                        <input type='button' value='Delete' onClick={() => this.deleteEducation(i)}/>
                    </div>
        )})

        let workList = work.map((item, i) => {
            return (<div key={i}>
                        <Work key={i}>{item}</Work>
                        <input type='button' value='Delete' onClick={() => this.deleteWork(i)}/>
                    </div>
            )
        })
 
        return (
            <div>
                <Personal/>
                {educationList}
                {/*
                <Education educationInput={this.handleEducation}/>
                */}
                <button onClick={this.handleEducation}>Add</button>

                {workList}

                <button onClick={this.handleWork}>Add</button>

                
                <button onClick={() => {
                    console.log(this.state.education)
                }}>Test Submit</button>
            </div>
        )
    }
}

export default App
