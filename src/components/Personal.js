import React, { Component } from 'react';

class Personal extends Component {
    constructor() {
        super();

        this.state = {
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            edit: true,
        }

    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        //this.props.personalInput(this.state)
        this.setState({
            edit: false,
        })
        console.log(this.state)
    }

    handleChange = (e) => {
        const inputName = e.target.name;

        this.setState({
            [inputName]: e.target.value
        })
    }

    deleteData = () => {
        this.setState({
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            edit: true,
        })
    }

    
    render() {
        const { firstName, lastName, phone, email, edit} = this.state;

        if (edit === true) {
            return (
                <div>
                    <h3>Personal Information</h3>
                    <form onSubmit={this.onSubmitHandler}>
                        <label htmlFor='firstNameInput'>
                            First Name:
                            <input type='text' name='firstName' onChange={this.handleChange} value={firstName} id='firstNameInput' required/>
                        </label>
    
                        <label htmlFor='lastNameInput'>
                            Last Name:
                            <input type='text' name='lastName' onChange={this.handleChange} value={lastName} id='lastNameInput' required/>
                        </label>
    
                        <label htmlFor='emailInput'>
                            Email:
                            <input type='email' name='email' onChange={this.handleChange} value={email} id='emailInput' required/>
                        </label>
    
                        <label htmlFor='phoneInput'>
                            Phone:
                            <input type='tel' name='phone' onChange={this.handleChange} value={phone} id='phoneInput' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder='000-000-0000' required/>
                        </label>
        
                        <input type='button' value='Delete' onClick={this.deleteData}/>
                        
                        <input type='submit' value='Submit'/>
                    </form>
                </div>
            )
        }
        else {
            return (
                <div>
                    <h3>FirstName:</h3>
                    <p>{firstName}</p>
                    <h3>LastName:</h3>
                    <p>{lastName}</p>
                    <h3>Phone:</h3>
                    <p>{phone}</p>
                    <h3>Email:</h3>
                    <p>{email}</p>
                    <button onClick={() => {
                        this.setState({
                            edit: !this.edit
                        })
                    }}>Edit Personal</button>
                </div>
            )
        }
        
    }
}

export default Personal