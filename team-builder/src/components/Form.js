import React, { useState, useEffect } from "react";

const Form = ({ addMember, memberEdit }) => {
  const [member, setMember] = useState({
    name: "",
    role: "",
    link: "",
    imgUrl: ""
  });

  useEffect(() => {
    setMember({
      name: memberEdit.name,
      role: memberEdit.role,
      link: memberEdit.link,
      imgUrl: memberEdit.imgUrl
    });
  }, []);

  const handler = e => {
    setMember({
      ...member,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    addMember(member);
    setMember({
      name: "",
      role: "",
      link: "",
      imgUrl: ""
    });
  };

  return (
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
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
