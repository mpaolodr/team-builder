import React from "react";
import { Link } from "react-router-dom";

const List = ({ teamList, editBtn }) => {
  return (
    <div className="teamContainer">
      {teamList.map(member => {
        return (
          <div className="memberContainer">
            <div className="imgContainer">
              <img src={member.imgUrl} alt="" />
            </div>
            <h2>{member.name}</h2>
            <h2>{member.role}</h2>
            <h2>{member.link}</h2>

            <button onClick={() => editBtn(member)}>
              <Link to="/add">Edit</Link>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default List;
