import React from "react";
import { Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Register from "./components/Register";
import Login from "./components/Login";
import Users from "./components/Users";

function App() {
  return (
    <div>
      <Navigation />
      <Route exact path="/" component={Users} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
    </div>
  );
}

export default App;
