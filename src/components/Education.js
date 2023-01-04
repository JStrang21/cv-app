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
        console.log(this.state)
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
                <h2>Education</h2>
                <form onSubmit={this.submitHandler}>
                    <label htmlFor='schoolInput'>
                        School:
                        <input type='text' id='schoolInput' name='school' value={school} onChange={this.handleChange}></input>
                    </label>

                    <label htmlFor='degreeInput'>
                        Degree/Major:
                        <input type='text' id='degreeInput' name='degree' value={degree} onChange={this.handleChange}></input>
                    </label>

                    <label htmlFor='fromInput'>
                        From:
                        <input type='date' id='fromInput' name='from' value={from} onChange={this.handleChange}></input>
                    </label>

                    <label htmlFor='toInput'>
                        To:
                        <input type='date' id='toInput' name='to' value={to} onChange={this.handleChange}></input>
                    </label>
                    <input type='submit' value='Submit'/>
                </form>
            </div>
        )
    }
}

export default Education