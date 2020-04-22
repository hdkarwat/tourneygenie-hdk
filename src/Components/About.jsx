import React, {Component} from 'react';
import './tourneycss.css';

export class About extends Component {


    render(){
        return(
            
            <div>
                <h2>Welcome to Tourney Genie</h2>
                <p className="description"> The application that every softball and baseball tournament director needs to run a smooth tournament weekend.
                No need to keep worrying about keeping track of endless amonts of paper
                <em> The Tourney Genie</em> will be there to keep everything you need in one simple place.</p>
             
                <p><img src="softballfieldImage.jpg" alt="Home" height="auto" width="100%"></img></p>
            </div>

      
           
        )

        
    }
}