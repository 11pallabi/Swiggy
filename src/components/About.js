import React from "react";
import UserClass from "./User-Class";
class About extends React.Component{

    constructor(props){
        super(props)
        console.log("Parent Constructor")
    }
   componentDidMount(){
    console.log("Parent Component- Did Mount")
   }
    render(){
        console.log("Parent Render")
        return (
            <div>
                <h1>About Me</h1>
                <h2>WELCOME TO ABHIJIT FOOD CLUB</h2>
                <UserClass name={"First"} location={"Nuapada(Class)"} />
                <UserClass name={"SEcond"} location={"Nuapada(Class)"} />

            </div>
        )
    }
}
export default About;