import React from "react";

const AddUsers = () => {
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const user = { name, email };
    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("user add success");
        e.target.reset();
      });
  };
  return (
    <div>
      <h1>add users</h1>
      <form onSubmit={handleSubmitForm}>
        <input type="text" name="name" id="" />
        <input type="email" name="email" id="" />
        <input type="submit" value="add user" />
      </form>
    </div>
  );
};

export default AddUsers;
