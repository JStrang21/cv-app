import React, { Component } from 'react';

class Personal extends Component {
    constructor() {
        super();

        this.state = {
            firstName: "",
            lastName: "",
            phone: null,
            email: "",
        }
    }

    onSubmitHandler = (e) => {
        e.preventDefault();

    }

    handleFirstNameChange = (e) => {
        this.setState({
            firstName: e.target.value
        })
    }

    handleLastNameChange = (e) => {
        this.setState({
            lastName: e.target.value
        })
    }

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handlePhoneChange = (e) => {
        this.setState({
            phone: e.target.value
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
                        <input type='text' onChange={this.handleFirstNameChange} value={firstName} id='firstNameInput'></input>
                    </label>

                    <label htmlFor='lastNameInput'>
                        Last Name:
                        <input type='text' onChange={this.handleLastNameChange} value={lastName} id='lastNameInput'></input>
                    </label>

                    <label htmlFor='emailInput'>
                        Email:
                        <input type='email' onChange={this.handleEmailChange} value={email} id='emailInput'></input>
                    </label>

                    <label htmlFor='phoneInput'>
                        Phone:
                        <input type='tel' onChange={this.handlePhoneChange} value={phone} id='phoneInput'></input>
                    </label>
                    <input type='submit' value='submit'></input>
                </form>
            </div>
        )
    }
}

export default Personal