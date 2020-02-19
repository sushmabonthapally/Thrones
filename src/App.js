import React,{Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import Details from './Details'
import './App.css';
import BioData from './bioData'
import Family from './familyDetails'
import Hobbies from './Hobbies';

class App extends Component {
  render(){
  return (
    <BrowserRouter>
    <div className="App">
      <Route path = '/' exact component = {Details}></Route>
      <Route path = '/biodata' exact component = {BioData}></Route>
      <Route path = '/family' exact component = {Family}></Route>
      <Route path = '/hobby' exact component = {Hobbies}></Route>
    </div>
    </BrowserRouter>
  );
 }
}

export default App;
