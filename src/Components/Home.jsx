import React, {Component} from 'react';
import './tourneycss.css';

export class Home extends Component {

    constructor(props) {
        super(props); 

        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);

    }

    handleSuccessfulAuth(data) {
        this.props.handleLogin(data);
        this.props.history.push("/dashboard"); 
    }
    render(){
        return(
            
            <div>
                <h2>Welcome to Tourney Genie</h2>
                <p className="description"> The application that every softball and baseball tournament director needs to run a smooth tournament weekend.
                There is no longer a need to always carry around your paper copy, because 
                <em> The Tourney Genie</em> will be there to keep everything you need in one simple place.</p>
             
                <p><img src="softballfieldImage.jpg" alt="Home" height="auto" width="100%"></img></p>
            </div>

      
           
        )

        
    }
}