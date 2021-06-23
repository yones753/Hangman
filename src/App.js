
import React, { Component } from 'react';
import Letters from './components/Letters'
import Score from './components/Score'
import Solution from './components/Solution'
import './App.css';

 class App extends Component {
   constructor(){
     super()
    this.state = {
     statusLetters : this.generateLetterStatuses(),
      solution : {word : "WOORD" , hint : "hinnt"},
      score : 100
      }
   }
  

   generateLetterStatuses() {
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }
    return letterStatus
  }
   
  render() {
    
    return (
      <div>
        <Score score={this.state.score}/>
        <Solution solution ={this.state.solution} statusLetters={this.state.statusLetters} />
        <Letters statusLetters={this.state.statusLetters}/>
        
       
      </div>

    )

  }

}

export default App;
