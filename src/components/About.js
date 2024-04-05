import User from "./User";
import UserClass from "./User-Class";

const About = () => {
    return (
        <div>
            <h1>About Me</h1>
            <h2>WELCOME TO Pallabi FOOD CLUB</h2>
            <User name={"Pallabi  (Function)"} location={"Nuapada(Function)"}/>
            <UserClass name={"Pallabi(Class)"} location={"Nuapada(Class)"} />
        </div>
    )
}

export default About;