import React,{Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import * as actionCreators from './store/action'
import axios from 'axios';

class Family  extends Component{
  constructor(props){
    super(props);
    this.state = {
        Data : ''
    }
}
componentDidMount(){
    axios.get('https://anapioficeandfire.com/api/characters/583')
    .then(response=>{
        this.setState({Data:response.data})
    })
    .catch(error=>{
        console.log("error",error)
    });

}
render(){
    return (
        <div>
        <h3 style = {{ textDecoration: 'underline'}}>FamilyDetails</h3>
        <div className = "biodata">
            <p><b>father</b>:{this.state.Data.father}</p>
            <p><b>mother</b> : {this.state.Data.mother}</p>
            <p><b>spouse</b> : {this.state.Data.spouse}</p>
          </div>
        </div>
    )
}
}
const mapStateToProps = (state)=>
{
return {
    familyDetails : state
}
}
const mapDispatchToProps =(dispatch)=>
{
return {
    onFamilyData : ()=>dispatch(actionCreators.getFamilyDetails())
}
}
export default connect(mapStateToProps,mapDispatchToProps)(Family)
