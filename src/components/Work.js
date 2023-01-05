import React, { Component } from 'react';

class Work extends Component {
    constructor() {
        super();

        this.state = {
            company: "",
            position: "",
            from: "",
            to: "",
            tasks: "",
        }
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.props.workInput(this.state)
    }

    changeHandler = (e) => {
        const inputName = e.target.name;

        this.setState({
            [inputName]: e.target.value,
        })
    }

    render() {
        const { company, position, from, to, tasks } = this.state;

        return (
            <div>
                <h3>Prior Experience</h3>
                <form onSubmit={this.submitHandler}>
                    <label htmlFor='companyInput'>
                        Company:
                        <input type='text' id='companyInput' name='company' value={company} onChange={this.changeHandler}/>
                    </label>

                    <label htmlFor='positionInput'>
                        Position Held:
                        <input type='text' id='positionInput' name='position' value={position} onChange={this.changeHandler}/>
                    </label>

                    <label htmlFor='fromInput'>
                        From:
                        <input type='date' id='fromInput' name='from' value={from} onChange={this.changeHandler}/>
                    </label>

                    <label htmlFor='toInput'>
                        To:
                        <input type='date' id='toInput' name='to' value={to} onChange={this.changeHandler}/>
                    </label>

                    <label htmlFor='tasksInput'>
                        Tasks:
                        <textarea type='text' id='tasksInput' name='tasks' value={tasks} onChange={this.changeHandler}/>
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

export default Work