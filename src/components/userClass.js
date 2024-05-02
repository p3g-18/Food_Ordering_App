//learning purpose

import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      count: 0,
    };
    console.log("child constructor");
  }

  render() {
    console.log("child render");
    const { name, Location, contact } = this.props;
    const { count } = this.state;
    return (
      <div className="userClass">
        <h1>{count}</h1>

        <h1>{name}</h1>
        <h2>{Location}</h2>
        <p>{contact}</p>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Click ME
        </button>
      </div>
    );
  }
}

export default UserClass;
