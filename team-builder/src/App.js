import React, { useState } from "react";
import { Route } from "react-router-dom";

//data
import team from "./team";

//components
import List from "./components/List.js";
import Navigation from "./components/Navigation.js";

import "./App.scss";

function App() {
  const [teamList, setTeamList] = useState(team);

  return (
    <div className="App">
      <Navigation />
      <Route exact path="/">
        <List teamList={teamList} />
      </Route>
    </div>
  );
}

export default App;
