import React, { useState, useEffect } from "react";

const Form = ({ addMember, updateUser, currentUser }) => {
  const [member, setMember] = useState({
    name: "",
    role: "",
    link: "",
    imgUrl: "",
    id: ""
  });

  useEffect(() => {
    setMember({
      name: currentUser.name,
      role: currentUser.role,
      link: currentUser.link,
      imgUrl: currentUser.imgUrl,
      id: currentUser.id
    });
  }, [currentUser]);

  const handler = e => {
    setMember({
      ...member,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (member.id !== "") {
      updateUser(member);
      alert("info has been updated");
      setMember({
        name: "",
        role: "",
        link: "",
        imgUrl: "",
        id: ""
      });
    } else {
      e.preventDefault();
      addMember(member);
      alert("succesfully added");
      setMember({
        name: "",
        role: "",
        link: "",
        imgUrl: "",
        id: ""
      });
    }
  };

  return (
    <div className="formContainer">
      <form className="form" onSubmit={e => onSubmit(e)}>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            id="name"
            name="name"
            value={member.name}
            placeholder="Name"
            required
            onChange={e => handler(e)}
          />
        </label>
        <label htmlFor="role">
          Role:
          <input
            type="text"
            id="role"
            name="role"
            value={member.role}
            placeholder="Role"
            required
            onChange={e => handler(e)}
          />
        </label>
        <label htmlFor="link">
          Link:
          <input
            type="text"
            id="link"
            name="link"
            value={member.link}
            placeholder="GitHub Profile"
            required
            onChange={e => handler(e)}
          />
        </label>
        <label htmlFor="imgUrl">
          ImgUrl:
          <input
            type="text"
            id="imgUrl"
            name="imgUrl"
            value={member.imgUrl}
            placeholder="Image URL"
            onChange={e => handler(e)}
          />
        </label>
        <button type="submit">Add/Edit</button>
      </form>
    </div>
  );
};

export default Form;
