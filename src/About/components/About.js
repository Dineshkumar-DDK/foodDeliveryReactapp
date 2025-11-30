import React from "react";
class About extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            profession: "software engineer",
            experience: 2,
            internship: 1
        }
        console.log(props)
    }
    render() {
        return (
            <div>
                Hi this is {this.props.name}
                {this.state?.profession}
                nearly {this.state.internship} year of internship experience and
                {this.state.experience} year of professional experience
            </div>
        )
    }
}

export { About }