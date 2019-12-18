import React from "react";

const List = ({ teamList }) => {
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
          </div>
        );
      })}
    </div>
  );
};

export default List;
