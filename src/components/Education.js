import React, { Component } from 'react';

class Education extends Component {
    constructor() {
        super();

        this.state = {
            school: "",
            degree: "",
            from: "",
            to: "",
        }
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.props.educationInput(this.state)
    }

    handleChange = (e) => {
        const inputName = e.target.name;

        this.setState({
            [inputName]: e.target.value
        })
    }

    render() {
        const { school, degree, from, to} = this.state
        return (
            <div>
                <h3>Education</h3>
                <form onSubmit={this.submitHandler}>
                    <label htmlFor='schoolInput'>
                        School:
                        <input type='text' id='schoolInput' name='school' value={school} onChange={this.handleChange}/>
                    </label>

                    <label htmlFor='degreeInput'>
                        Degree/Major:
                        <input type='text' id='degreeInput' name='degree' value={degree} onChange={this.handleChange}/>
                    </label>

                    <label htmlFor='fromInput'>
                        From:
                        <input type='date' id='fromInput' name='from' value={from} onChange={this.handleChange}/>
                    </label>

                    <label htmlFor='toInput'>
                        To:
                        <input type='date' id='toInput' name='to' value={to} onChange={this.handleChange}/>
                    </label>
                    
                    <input type='button' value='Edit'/>
                    
                    <input type='button' value='Add Another'/>

                    <input type='button' value='Delete'/>
                    
                    <input type='submit' value='Save'/>
                </form>
            </div>
        )
    }
}

export default Education