import React from "react";

class Register extends React.Component {
  render() {
    return (
      <div>
        <h1>Create A User Account</h1>

        <form action="">
          <input name="username" type="text" />
          <input name="password" type="password" />
          <button>Create Account</button>
        </form>
      </div>
    );
  }
}

export default Register;
