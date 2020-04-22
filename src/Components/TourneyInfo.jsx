import React, {Component} from 'react';
import {Table} from 'react-bootstrap'; 
import './tourneycss.css';

export class TourneyInfo extends Component {

    constructor(props) {
        super(props);
        this.state ={tourneys:[]}
    }

    componentDidMount() {
        this.refreshList(); 
    }
    refreshList() {
        this.setState({
            tourneys:[{"TournamentID":1, "TournamentName": "Softball Smash", "TournamentAgeGroups": "10U-16U", "TournamentDate": "06/24/2020", "TournamentLocation": "Frankenmuth, MI"},
            {"TournamentID":2, "TournamentName": "Baseball Bash", "TournamentAgeGroups": "10U-14U","TournamentDate": "07/14/2020", "TournamentLocation": "Frankenmuth, MI"}
        ]
        })
    }
    render(){

    const {tourneys} = this.state; 

        return(
            <div>
            <h2>Current Tournaments</h2>
            
           <Table className="mt-5" stripped bordered hover size="sm">
               <thead>
                    <tr>
                        <th>Tournament ID</th>
                        <th>Tournament Name</th>
                        <th>Tournament Age Groups</th>
                        <th>Tournament Date</th>
                        <th>Tournament Location</th>
                    </tr>
               </thead>

               <tbody>
                   {tourneys.map(tourney=> 
                        <tr key = {tourney.TournamentID}> 
                            <td>{tourney.TournamentID}</td>
                            <td>{tourney.TournamentName}</td>
                            <td>{tourney.TournamentAgeGroups}</td>
                            <td>{tourney.TournamentDate}</td>
                            <td>{tourney.TournamentLocation}</td>
                        </tr>
                        )}
               </tbody>

           </Table>

           </div>
        )

        
    }
}