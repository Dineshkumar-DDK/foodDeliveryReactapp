import React from "react";
class About extends React.Component{
    constructor(props){
        super(props)
        console.log(props)
    }
    render(){
       return ( <div>
            Hi this is {this.props.name} 
            Software Developer
            nearly 2 years of experience
            1 year of professional experience
        </div>)
    }
}

export {About}