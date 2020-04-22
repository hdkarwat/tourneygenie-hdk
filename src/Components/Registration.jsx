import React, { Component } from "react";
import axios from 'axios';
import './tourneycss.css';

export class Registration extends Component {
    
    constructor(props) {
    super(props); 

    this.state = {
        email: "",
        password: "",
        loginErrors: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange  = this.handleChange.bind(this);
}
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        }); 
    }

    handleSubmit(event) {
        const { email, password} = this.state; 


        axios 
        .post(
            "http://localhost:3001/sessions",
            {
                user: {
                    email: email,
                    password: password

                }
            }, 

            { withCredientials: true}
        )

        .then(response => {
           if(response.data.logged_in) {
               this.props.handleSuccessfulAuth(response.data); 
           }
        })

        .catch(error => {
            console.log("registration error", error);
        });
        event.preventDefault(); 
    }

    render() {
        return (
            <div className="loginscreen">
                <h2>Login to Tourney Genie</h2>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                        />

                     <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                        />
                    <button type="submit">Register</button>

                </form>
            </div>
        )
    }

}
