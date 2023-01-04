import React, { Component } from 'react';
import Personal from './Personal.js';
import Education from './Education.js';
import Work from './Work.js';


class App extends Component{
    constructor() {
        super()

        this.state = {
            personal: "",
            education: "",
            work: "",
        }
    }

    handleData = (data) => {
        this.setState({
            personal: data,
        })
    }

    render() {
        return (
            <div>
                <Personal personalInput={this.handleData}/>
                <Education />
                <Work />
                
                <button onClick={() => {
                    console.log(this.state.personal)
                }}>Test Submit</button>
            </div>
        )
    }
}

export default App
