import React, { Component } from 'react';
import Personal from './Personal.js';
import Education from './Education.js';
import Work from './Work.js';


class App extends Component{
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <Personal />
                <Education />
                <Work />
            </div>
        )
    }
}

export default App
