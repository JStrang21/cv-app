import React, { Component } from 'react';
import uniqid from 'uniqid';

class Education extends Component {
    constructor() {
        super();

        this.state = {
            school: "",
            degree: "",
            from: "",
            to: "",
            flag: true,
            delete: false
        }
    }

    submitHandler = (e) => {
        e.preventDefault();
        //this.props.delete()
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
                                                                    
                        <input type='submit' value='Save'/>
                    </form>
                </div>
            )
        }
        else {
            return (
                <div className="infoContainer">
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
                    }}>Edit</button>
                </div> 
            ) 
        }
    }
}

export default Education