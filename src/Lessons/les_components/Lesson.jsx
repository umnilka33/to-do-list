import React from "react";

function Welcome() {
    return <h1>Hello, World!</h1>
}

class SuperWelcome extends React.Component {
    render() {
        return <h1>Привет, Мир!</h1>
    }
}

function Lesson(){
    return (
        <div>
            <Welcome />
            <SuperWelcome />
        </div>
    )
}
export default Lesson;