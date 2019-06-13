import React from "react";

class Register extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <h1>Create A User Account</h1>

        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.username}
            name="username"
            type="text"
          />
          <input
            onChange={this.handleChange}
            value={this.state.password}
            name="password"
            type="password"
          />
          <button>Create Account</button>
        </form>
      </div>
    );
  }
}

export default Register;
