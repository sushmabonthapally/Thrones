import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actionCreators from './store/action'
import axios from 'axios';
import './bioData.css';

class BioData extends Component{
    constructor(props){
        super(props);
        this.state = {
            personalData : ''
        }
    }
    componentDidMount(){
        axios.get('https://anapioficeandfire.com/api/characters/583')
        .then(response=>{
            console.log("response",response.data.name)
            this.setState({personalData:response.data})
        })
        .catch(error=>{
            console.log("error",error)
        });

    }
    render(){
        return (
            <div>
            <h3>BIODATA</h3>
            <div className = "biodata">
                <p><b>name</b> : {this.state.personalData.name}</p>
                <p><b>gender</b>:{this.state.personalData.gender}</p>
                <p><b>culture</b> : {this.state.personalData.culture}</p>
                <p><b>born</b> : {this.state.personalData.born}</p>
                <p><b>titles</b> : {this.state.personalData.titles}</p>
                <p><b>aliases</b> : {this.state.personalData.aliases}</p>
                {/* {Object.values(this.state.personalData).map((val,key)=>{
                    console.log("val",val);
                   return <p key = {key}>{val}</p>
                      }
                    )} */}
              </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>
{
    return {
        prsName : state
    }
}
const mapDispatchToProps =(dispatch)=>
{
    return {
        onBioData : ()=>dispatch(actionCreators.getDataSuccess())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(BioData)