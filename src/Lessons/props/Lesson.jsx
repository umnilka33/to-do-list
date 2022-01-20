import React, { Component } from "react";
import propTypes from "prop-types";
/*const Counter = (props) => {
    console.log(props);
    return <h1>{`Counter component. Counter value is: ${props.counter}`}</h1>
}*/

//Or
const Counter = ({counter, string, func, number}) => {
    console.log(counter, string, func, number);
    return <h1>{`Counter component. Counter value is: ${counter}`}</h1>
}

Counter.propTypes = {
    counter: propTypes.number.isRequired,
    func: propTypes.number,
    number: propTypes.number,
    string: propTypes.string,
}

Counter.defaultProps = {
    func: ()=>{},
    number: 88,
    string: '',
}

class CounterButton extends Component {
    state = {
        counter: 0,
    }

    handleClick = () => {
        
        this.setState(({counter}) =>({
            counter: ++counter,
        }))
    }

    render () {
        const { counter } = this.state;

        return(
            <div>
            <div>{counter}</div>
            <Counter 
            counter={counter}
            func={()=>{}}
            number={1}
            string="строка"/>
            <button onClick={this.handleClick}>push me</button>
            </div>
        )
    }
}

export default CounterButton;