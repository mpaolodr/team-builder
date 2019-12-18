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
  const [memberEdit, setMemberEdit] = useState({
    name: "",
    id: "",
    role: "",
    link: "",
    imgUrl: ""
  });

  const addMember = member => {
    const newMember = {
      name: member.name,
      id: teamList.length,
      role: member.role,
      link: member.link,
      imgUrl: member.imgUrl
    };

    setTeamList([...teamList, newMember]);
  };

  const editMember = existing => {
    setMemberEdit({
      name: existing.name,
      id: existing.id,
      role: existing.role,
      link: existing.link,
      imgUrl: existing.imgUrl
    });
  };

  return (
    <div className="App">
      <Navigation />

      <Switch>
        <Route path="/add">
          <Form addMember={addMember} memberEdit={memberEdit} />
        </Route>
        <Route exact path="/">
          <List teamList={teamList} editMember={editMember} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
