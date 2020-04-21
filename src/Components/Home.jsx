import React, {Component} from 'react';
import './tourneycss.css';

export class Home extends Component {


    render(){
        return(
            
            <div>
                <h2>Welcome to Tourney Genie</h2>
                <p className="m-3 d-flex justify-content-center"> The application that every softball and baseball tournament director needs to run a smooth tournament weekend.</p>
             
                <p><img src="softballfieldImage.jpg" alt="Home" height="auto" width="100%"></img></p>
            </div>

      
           
        )

        
    }
}