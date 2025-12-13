import React from "react";
import CopyRightsContext from "../../Utils/GlobalContext";
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
                <CopyRightsContext.Consumer>
                    {
                        ({user,message})=>
                            <h6>
                                {message + " " + user}
                            </h6>
                    }
                </CopyRightsContext.Consumer>
            </div>
        )
    }
}

export { About }