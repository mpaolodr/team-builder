import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

//data
import team from "./team";

//components
import List from "./components/List.js";
import Navigation from "./components/Navigation.js";
import Form from "./components/Form.js";

import "./App.scss";

function App() {
  const [teamList, setTeamList] = useState(team);

  const addMember = member => {
    const newMember = {
      name: member.name,
      id: member.name.toLowerCase(),
      role: member.role,
      link: member.link
    };

    setTeamList([...teamList, newMember]);
  };

  return (
    <div className="App">
      <Navigation />

      <Switch>
        <Route path="/add">
          <Form addMember={addMember} />
        </Route>
        <Route exact path="/">
          <List teamList={teamList} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
