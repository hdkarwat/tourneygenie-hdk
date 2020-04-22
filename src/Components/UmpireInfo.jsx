import React, {Component} from 'react';
import {Table} from 'react-bootstrap'; 
import './tourneycss.css';

export class UmpireInfo extends Component {

    constructor(props) {
        super(props);
        this.state ={umpires:[]}
    }

    componentDidMount() {
        this.refreshList(); 
    }
    refreshList() {
        this.setState({
            umpires:[{"TournamentID":1, "UmpireName": "Jim Kook", "WorkingField": "1", "NumberOfGames": "21", "PhoneContact": "(989) 529-3545", "EmailContact": "jimkook@gmail.com"}, 
            {"TournamentID":1, "UmpireName": "Jospeh Lee", "WorkingField": "1", "NumberOfGames": "18", "PhoneContact": "(810) 239-1445", "EmailContact": "josephlee@gmail.com"},
            {"TournamentID":2, "UmpireName": "Matt Karwat", "WorkingField": "2", "NumberOfGames": "21", "PhoneContact": "(989) 239-1572", "EmailContact": "matt.karwat@gmail.com"},
            {"TournamentID":2, "UmpireName": "Noah Bowers", "WorkingField": "2", "NumberOfGames": "9", "PhoneContact": "(616) 727-7729", "EmailContact": "noahbowers@gmail.com"}
            
        ]
        })
    }
    render(){

    const {umpires} = this.state; 

        return(
            <div>
            <h2>Umpire Information</h2>

           <Table className="mt-4" stripped bordered hover size="sm">
               <thead>
                    <tr>
                        <th>Tournament ID</th>
                        <th>Umpire Name</th>
                        <th>Working Field</th>
                        <th>Number of Games</th>
                        <th>Phone Contact</th>
                        <th>Email Contact</th>
                    </tr>
               </thead>

               <tbody>
                   {umpires.map(umpire=> 
                        <tr key = {umpire.TournamentID}> 
                            <td>{umpire.TournamentID}</td>
                            <td>{umpire.UmpireName}</td>
                            <td>{umpire.WorkingField}</td>
                            <td>{umpire.NumberOfGames}</td>
                            <td>{umpire.PhoneContact}</td>
                            <td>{umpire.EmailContact}</td>
                        </tr>
                        )}
               </tbody>

           </Table>
           
           </div>
        )

        
    }
}