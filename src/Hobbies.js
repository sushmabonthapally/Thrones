import React,{Component} from 'react';
// import './App.css';
import {connect} from 'react-redux';
import * as actionCreators from './store/action'
import axios from 'axios';
import './Hobbies.css';

class Hobby  extends Component{
  constructor(props){
    super(props);
    this.state = {
        Data: ''
    }
}
componentDidMount(){
    axios.get('https://anapioficeandfire.com/api/characters/583')
    .then(response=>{
        console.log("response",response.data.name)
        this.setState({Data:response.data})
    })
    .catch(error=>{
        console.log("error",error)
    });

}
render(){
    return (
        <div>
        <h3 className = "hobby">Hobbies</h3>
        <div className = "hobbyDetails">
            <p><b>books</b>:{this.state.Data.books}</p>
            <p><b>povBooks</b> : {this.state.Data.povBooks}</p>
            <p><b>tvSeries</b> : {this.state.Data.tvSeries}</p>
          </div>
        </div>
    )
}
}
const mapStateToProps = (state)=>
{
return {
    preHobby : state
}
}
const mapDispatchToProps =(dispatch)=>
{
return {
    onHobbyData : ()=>dispatch(actionCreators.GETHOBBIES())
}
}
export default connect(mapStateToProps,mapDispatchToProps)(Hobby)
