import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import './Details.css'

class Details extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return (
        <div>
         <header className="App-header">
          <nav>
          <ul>
            <li><Link to = '/' style={{ textDecoration: 'none',color:'black',fontWeight:'bold',cursor:'text'}}>Details of person</Link></li>
            <div className = "details">
            <li><Link to = '/biodata' style={{ color:'black'}}>BioData</Link></li>
            </div>
            <div className = "family">
            <li><Link to = '/family' style={{ color:'black'}}>FamilyDetails</Link></li>
            </div>
            <div className = "hobbies">
            <li><Link to = '/hobby' style={{ color:'black'}}>Hobbies</Link></li>
            </div>
          </ul>
         </nav>
         </header>
        </div>
        )
    }
}

export default Details