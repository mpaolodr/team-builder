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

  //initial form state
  const initialState = {
    name: "",
    id: "",
    role: "",
    link: "",
    imgUrl: ""
  };

  //current user state
  const [currentUser, setCurrentUser] = useState(initialState);

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

  const editBtn = existing => {
    setCurrentUser({
      name: existing.name,
      id: existing.id,
      role: existing.role,
      link: existing.link,
      imgUrl: existing.imgUrl
    });
  };

  const updateUser = user => {
    const replace = teamList.map(obj =>
      obj.id === user.id ? { ...user } : { ...obj }
    );
    setTeamList(replace);
  };

  return (
    <div className="App">
      <Navigation />

      <Switch>
        <Route path="/add">
          <Form
            addMember={addMember}
            updateUser={updateUser}
            currentUser={currentUser}
            teamList={teamList}
          />
        </Route>
        <Route exact path="/">
          <List teamList={teamList} editBtn={editBtn} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
