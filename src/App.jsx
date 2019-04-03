import React, { Component } from 'react';
import './App.css';
import IdPage from "./components/IdPage"
import data from "./data"

class App extends Component {
  constructor(){
    super()

    this.state = {
      name : "",
      from : "",
      job : "",
      employer: "",
      favoriteMovies : [{title:"movie"},{title:"mmovie2"}],
      id: 0,
      data : data
    }

  }
  
  previousChange (id){
    this.setState({id : id-1})
  }

  nextChange (id){
    this.setState({id : id+1})
  }
  
  
  render() {

    return (
      <div className="App">
      
      <IdPage data={this.state.data} id={this.state.id} nextChange = {this.nextChange} previousChange={this.previousChange} />
      <div className="display"></div>
      <button className="previous" onClick={()=>this.previousChange(this.state.id)} disabled={this.state.id === 0}> &lt; Previous</button>
      <button className="next" onClick={()=>this.nextChange(this.state.id)} disabled={this.state.id === 24}>Next &gt;</button> 
      
      </div>
    );
  }
}

export default App;
