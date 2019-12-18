import React, { useState } from "react";
import { Route } from "react-router-dom";

//data
import team from "./team";

//components
import List from "./components/List.js";

import "./App.scss";

function App() {
  const [teamList, setTeamList] = useState(team);

  return (
    <div className="App">
      <List teamList={teamList} />
    </div>
  );
}

export default App;
