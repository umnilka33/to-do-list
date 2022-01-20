import React, { Component, Fragment } from "react";

const POSITIONS = [
    {
        id: 'fd',
        value: 'Front-end developer',
        title: 'Front-end developer',
    },
    {
        id: 'bd',
        value: 'Back-end developer',
        title: 'Back-end developer',
    },
    {
        id: 'fsd',
        value: 'Full-stack developer',
        title: 'Full-stack developer',
    },
]

class Form extends Component {
    state = {
        inputText: '',
        textareaText: '',
        selectText: '',
        showData: {
            name: '?',
            text: '?',
            position: '',
        }
    }

    inputRef = React.createRef();
    textareaRef = React.createRef();
    selectRef = React.createRef();

    componentWillMount() {
        console.log('cWm', this.inputRef)
    }

    componentDidMount() {
        console.log('cDm', this.inputRef)
    }

    handleChange = () => {
        this.setState({
            inputText: this.inputRef.current.value,
            textareaText: this.textareaRef.current.value,
            selectText: this.selectRef.current.value,
        })
    }

    handleShow = (e) => {
        e.preventDefault();
        const { inputText, textareaText, selectText } = this.state;
        this.setState({
            inputText: '',
            textareaText: '',
            selectText: '',
            showData: {
                name: inputText,
                text: textareaText,
                position: selectText,
            }
        })
    }

    render() {
        const { inputText, textareaText, selectText, showData } = this.state;
        const { name, text, position } = showData;
        return (
            <Fragment>
            <form>
                {/* Input */}
                <label>
                    Name:
                    <input ref={this.inputRef} type="text" name="name" value={inputText} onChange={this.handleChange}/>
                </label>
                {/* Textarea */}<br />
                <label htmlFor="text">Text:</label>
                <textarea ref={this.textareaRef} id="text" value={textareaText} onChange={this.handleChange}/>
                {/* Select */}<br />
                <select ref={this.selectRef} value={selectText} onChange={this.handleChange}>
                        {POSITIONS.map(({ id, value, title }) => (
                            <option
                                key={id}
                                value={value}
                            >{title}
                            </option>
                        ))}
                </select>
                {/* Button */}<br />
                <button onClick={this.handleShow}>Show</button>
            </form>
            <h1>Name: {name}</h1> 
            <h2>Text: {text}</h2>
            <h3>Position: {position}</h3>
            </Fragment>
        )
    }
}

export default Form;