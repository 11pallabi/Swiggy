import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props)
        console.log(props)
        this.state = {
            count : 1,
            count2 : 2
        }
    }
    
  
    render(){
        const {name,location}=this.props
        return (
            <div className='user-card'>
                  <h2>Count:{this.state.count}</h2>
               <h2>Count2:{this.state.count2}</h2>
               <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Count
        </button>
               <h2>Name: {name}</h2>
               <h3>Location:{location}</h3>    
            </div>
          )
    }
}

export default UserClass