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
    componentDidMount(){
        console.log(this.props.name,"child Component Did Mount")
      }
    
  
    render(){
        const {name,location}=this.props
        const {count} = this.state
    console.log(this.props.name,"Child Render")
        return (
            <div className='user-card'>
                  <h2>Count:{count}</h2>
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