import React, { Component } from "react";
import PropTypes from "prop-types";

const MyLink = ({text, onClick}) => (
    <a href="/test" onClick={onClick}>{text}</a>
);

MyLink.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
}

MyLink.defaultProps = {
    text: "default text",
    onClick: () => {},
}

class App extends Component {

    handleClick = (e) => {
        e.preventDefault();
        console.log('good job');
        //this.text(); вызов другого метода
    }


    render() {
        return (
            <MyLink text="click on me" onClick={this.handleClick} />
        )
    }
}

export default App