import UserContext from "../utils/userContext";
import React from "react";
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
                <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
            </div>
        )
    }
}
export default About;