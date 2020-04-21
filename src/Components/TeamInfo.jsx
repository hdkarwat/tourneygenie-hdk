import React, {Component} from 'react';
import {Table} from 'react-bootstrap'; 

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
            teams:[{"TournamentID":1, "TeamName": "Muth", "TeamAgeGroup": "14U"}, 
            {"TournamentID":2, "TeamName": "Mavs", "TeamAgeGroup": "16U"}
        ]
        })
    }
    render(){

    const {teams} = this.state; 

        return(
           <Table className="mt-4" stripped bordered hover size="sm">
               <thead>
                    <tr>
                        <th>TournamentID</th>
                        <th>TeamName</th>
                        <th>TeamAgeGroup</th>
                    </tr>
               </thead>

               <tbody>
                   {teams.map(team=> 
                        <tr key = {team.TournamentID}> 
                            <td>{team.TournamentID}</td>
                            <td>{team.TeamName}</td>
                            <td>{team.TeamAgeGroup}</td>
                        </tr>
                        )}
               </tbody>

           </Table>
        )

        
    }
}