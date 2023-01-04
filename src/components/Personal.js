import React, { Component } from 'react';

class Personal extends Component {
    constructor() {
        super();

        this.state = {
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
        }
    }

    onSubmitHandler = (e) => {
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
        const { firstName, lastName, phone, email} = this.state;

        return (
            <div>
                <h2>Personal Information</h2>
                <form onSubmit={this.onSubmitHandler}>
                    <label htmlFor='firstNameInput'>
                        First Name:
                        <input type='text' name='firstName' onChange={this.handleChange} value={firstName} id='firstNameInput'></input>
                    </label>

                    <label htmlFor='lastNameInput'>
                        Last Name:
                        <input type='text' name='lastName' onChange={this.handleChange} value={lastName} id='lastNameInput'></input>
                    </label>

                    <label htmlFor='emailInput'>
                        Email:
                        <input type='email' name='email' onChange={this.handleChange} value={email} id='emailInput'></input>
                    </label>

                    <label htmlFor='phoneInput'>
                        Phone:
                        <input type='tel' name='phone' onChange={this.handleChange} value={phone} id='phoneInput'  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder='000-000-0000'></input>
                    </label>
                    <input type='submit' value='Submit'/>
                </form>
            </div>
        )
    }
}

export default Personal