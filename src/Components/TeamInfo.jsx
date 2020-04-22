import React, {Component} from 'react';
import {Table} from 'react-bootstrap'; 
import './tourneycss.css';

export class TeamInfo extends Component {

    constructor(props) {
        super(props);
        this.state ={teams:[]}
    }

    componentDidMount() {
        this.refreshList(); 
    }
    refreshList() {
        this.setState({
            teams:[{"TournamentID":1, "TeamName": "Muth Black", "TeamAgeGroup": "14U", "TeamContact": "Jae Shobbrook","TeamPhoneContact": "(989) 529-3545", "TeamEmailContact": "muthblackcoach14U@gmail.com"}, 
            {"TournamentID":1, "TeamName": "Muth Red", "TeamAgeGroup": "15U", "TeamContact": "Brad Walraven", "TeamPhoneContact": "(616) 555-3345", "TeamEmailContact": "muthredroach15U@gmail.com"},
            {"TournamentID":2, "TeamName": "Mavs Blue", "TeamAgeGroup": "16U", "TeamContact": "Matt Karwat", "TeamPhoneContact": "(801) 262-8026", "TeamEmailContact": "mavbluecoach16U@gmail.com"},
            {"TournamentID":2, "TeamName": "Mavs White", "TeamAgeGroup": "12U", "TeamContact": "Noah Bowers", "TeamPhoneContact": "(248) 589-0022", "TeamEmailContact": "mavbluecoach12U@gmail.com"}
        ]
        })
    }
    render(){

    const {teams} = this.state; 

        return(
            <div>
            <h2>Team Information</h2>

           <Table className="mt-4" stripped bordered hover size="sm">
               <thead>
                    <tr>
                        <th>Tournament ID</th>
                        <th>Team Name</th>
                        <th>Team Age Group</th>
                        <th>Team Contact</th>
                        <th>Team Phone Contact</th>
                        <th>Team Email Contact</th>
                    </tr>
               </thead>

               <tbody>
                   {teams.map(team=> 
                        <tr key = {team.TournamentID}> 
                            <td>{team.TournamentID}</td>
                            <td>{team.TeamName}</td>
                            <td>{team.TeamAgeGroup}</td>
                            <td>{team.TeamContact}</td>
                            <td>{team.TeamPhoneContact}</td>
                            <td>{team.TeamEmailContact}</td>
                        </tr>
                        )}
               </tbody>

           </Table>
           
           </div>
        )

        
    }
}