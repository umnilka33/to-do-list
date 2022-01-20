import React, { Component, Fragment } from "react";

const ValidationMsg = ({val}) => {
    if(val >= 10) {
        return <h2>Больше или равно 10, а конкретно {val}</h2>
    }
    else {
        return <h3>Меньше 10, а конкретно {val}</h3>
    }
}
/* stateless component
const App = () => {
    const val = 8;

    return (
        <div>
            <ValidationMsg val={13} />
            //ternary
            {val >= 10 ? <h2>Больше или равно 10, а конкретно {val}</h2> : <h3>Меньше <em>10</em>, а конкретно {val}</h3>}
            //&&
            {val && <span>VAL is here</span>}
        </div>
    )
}
*/

const Tab1 = () => (
    <h1>Wow, it's Tab1</h1>
)

const Tab2 = () => (
    <h1>Huray, it's Tab2</h1>
)

const Tab3 = () => (
    <h1>LOL, it's Tab3</h1>
)

class App extends Component {

    state = {
        activeTab: 1,
    }

    handleTab = (e) => {
        this.setState({
            activeTab: +e.target.getAttribute('data-name') // + для преобразования типа
        })
    }

    render() {
        const { activeTab } = this.state
        console.log('now', this.state.activeTab, 'is active tab')
        return(
            <Fragment>
                <button data-name={1} onClick={this.handleTab}>Tab1</button>
                <button data-name={2} onClick={this.handleTab}>Tab2</button>
                <button data-name={3} onClick={this.handleTab}>Tab3</button>
                { activeTab === 1 && <Tab1 /> }
                { activeTab === 2 && <Tab2 /> }
                { activeTab === 3 && <Tab3 /> }
                <div>
                    {`Active tab is: ${activeTab === 1 ? 'first' : activeTab === 2 ? 'second' : 'third'}`}
                </div>
            </Fragment>
        );
    }
}

export default App;