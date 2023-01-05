import React, { Component } from 'react';
import Personal from './Personal.js';
import Education from './Education.js';
import Work from './Work.js';


class App extends Component{
    constructor() {
        super()

        this.state = {
            personal: "",
            personalToggle: true,
            education: "",
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
            education: educationData,
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

    render() {
        const { personal, personalToggle, education, work} = this.state;

        let pElement;
        if (personalToggle) {
            pElement = <div>
                            <Personal personalInput={this.handlePersonal} previous={personal}/>
                            <button onClick={() => {
                                this.setState({
                                    personalToggle: !personalToggle
                                })
                            }}>Save Personal</button>
                        </div>
        }
        else {
            pElement =  <div>
                            <h3>FirstName:</h3>
                            <p>{personal.firstName}</p>
                            <h3>LastName:</h3>
                            <p>{personal.lastName}</p>
                            <h3>Phone:</h3>
                            <p>{personal.phone}</p>
                            <h3>Email:</h3>
                            <p>{personal.email}</p>
                            <button onClick={() => {
                                this.setState({
                                    personalToggle: !personalToggle
                                })
                            }}>Edit Personal</button>
                        </div>
        }

        return (
            <div>
                {pElement}
                {/*<Personal personalInput={this.handlePersonal}/>
                <button onClick={() => {
                    this.setState({
                        personalToggle: !personalToggle
                    })
                    console.log(personalToggle)
                }}>Save Personal</button> */}
                <Education educationInput={this.handleEducation}/>
                <Work workInput={this.handleWork}/>
                
                <button onClick={() => {
                    console.log(this.state.education)
                }}>Test Submit</button>
            </div>
        )
    }
}

export default App
