import React, { Component } from 'react';
import Line from './Line';
import Hint from './Hint'
import Letter from './Letter'


class Solution extends Component {
    setLines(){
        let arr = []
        let num = 4
        let index = 0
        while(index < num) {
           
            arr[index] = <Line key={"line-"+index}/> 
            index++ 
        }
        return arr
    }
    
    render() {
    
            let count = 0;
        return (
            <div>
              {[...this.props.solution.word].map(l => (this.props.statusLetters[l])?<Letter key={l+count++} letter={l}/> : <Line key={l+count++}/>)}
              <Hint hint={this.props.solution.hint}/>
              
            </div>   
     )
    }
};


export default Solution