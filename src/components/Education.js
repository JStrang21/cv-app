import React, { Component } from 'react';

class Education extends Component {
    constructor() {
        super();

        this.state = {
            school: "",
            degree: "",
            from: "",
            to: "",
            flag: true,
        }
    }

    submitHandler = (e) => {
        e.preventDefault();
        //this.props.flag(false)
        this.setState({
            flag: false
        })
    }

    handleChange = (e) => {
        const inputName = e.target.name;

        this.setState({
            [inputName]: e.target.value
        })
    }

    deleteData = () => {
        this.setState({
            school: "",
            degree: "",
            from: "",
            to: "",
            flag: true,
        })
        this.props.flag(true)
    }

    render() {
        const { school, degree, from, to, flag} = this.state

        if (flag === true) {
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
                    
                        <input type='button' value='Delete' onClick={this.deleteData}/>
                        
                        <input type='submit' value='Save'/>
                    </form>
                </div>
            )
        }
        else {
            return (
                <div>
                    <h3>School:</h3>
                    <p>{school}</p>
                    <h3>Degree/Major:</h3>
                    <p>{degree}</p>
                    <h3>From:</h3>
                    <p>{from}</p>
                    <h3>To:</h3>
                    <p>{to}</p>
                    <button onClick={() => {
                        this.setState({
                            flag: true
                        })
                    }}>Edit Education</button>
                </div> 
            ) 
        }
    }
}

export default Education