import React, {Component} from 'react';
import './tourneycss.css';

export class About extends Component {


    render(){
        return(
            
            <div>
                <h2>Meet the Developer</h2>
                <p className="description"> Hi! My name is Hannah Karwat and I am a softball tournament director for the Frankenmuth Baseball
                and Softball Association. Since I spend a lot of my weekends dealing with tournament brackets, angry parents, and mouthy coaches... the last thing
                I want to worry about is where to keep my important papers. Since I am also a computing student at GVSU, I thought for my final semester project, it 
                would be fun to create an application that could store all my important tournament data in one clear easy to read place. So I came up with a catchy 
                name and boom <em> The Tourney Genie</em> was created. </p>
                
                <div className="rows">
                <p className="column"><img src="hanImage.jpg" alt="Han1" height="auto" width="100%"></img></p>
                <p className="column"><img src="tourney1.jpg" alt="Han2" height="auto" width="100%"></img></p>
                </div>
            </div>


        )
    }
}