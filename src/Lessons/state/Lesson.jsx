import React, { Component } from "react";

/*//Old
class CounterButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
        }

        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {

    }
}
*/
//Modern
class CounterButton extends Component {
    state = {
        counter: 0,
    }

    handleClick = () => {
        /*this.setState ({
            counter: this.state.counter + 1
        });*/

        //Or
        /*this.setState(prevState => ({
            counter: ++prevState.counter,
        }))*/
        
        //Or
        this.setState(({counter}) =>({
            counter: ++counter,
        }))
    }

    render () {
        const { counter } = this.state;

        return(
            <div>
            <div>{counter}</div>
            <button onClick={this.handleClick}>push me</button>
            </div>
        )
    }
}

export default CounterButton;