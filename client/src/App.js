import React from "react";
import { Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Register from "./components/Register";
import Users from "./components/Users";

function App() {
  return (
    <div>
      <Navigation />
      <Route exact path="/" component={Users} />
      <Route path="/register" component={Register} />
    </div>
  );
}

export default App;
