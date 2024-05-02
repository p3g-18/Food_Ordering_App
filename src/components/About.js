import UserClass from "./userClass";
import User from "./userFunc";

const About = () => {
  return (
    <div className="about">
      <h1>About Us page is under construction!</h1>
      <h2> Please visit next time</h2>
      <User name={"PG"} Description={"frontend Enthusiast"} />
      {/* <UserClass
        name={"parth"}
        Location={"Navsari, Gujarat"}
        contact={9265159026}
      /> */}
    </div>
  );
};

export default About;
