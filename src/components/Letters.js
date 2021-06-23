import React, { Component } from 'react';
import Letter from './Letter';


class Letters extends Component {

    render() {

        return (
            <div>
                
                <div>Available Letters</div>
                {Object.keys(this.props.statusLetters).map(le => (this.props.statusLetters[le].value) ?<Letter className="true" key={le} letter={le} />  : <Letter className="false" key={le} letter={le} />)}
            </div>
        )
    }
}
export default Letters