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
            umpires:[{"UmpireID":1, "UmpireName": "Jim Kook", "WorkingField": "1", "NumberOfGames": "21", "PhoneContact": "(989) 529-3545", "EmailContact": "jimkook@gmail.com"}, 
            {"UmpireID":2, "UmpireName": "Jospeh Lee", "WorkingField": "1", "NumberOfGames": "18", "PhoneContact": "(810) 239-1445", "EmailContact": "josephlee@gmail.com"}
            
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
                        <th>Umpire ID</th>
                        <th>Umpire Name</th>
                        <th>Working Field</th>
                        <th>Number of Games</th>
                        <th>Phone Contact</th>
                        <th>Email Contact</th>
                    </tr>
               </thead>

               <tbody>
                   {umpires.map(umpire=> 
                        <tr key = {umpire.UmpireID}> 
                            <td>{umpire.UmpireID}</td>
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