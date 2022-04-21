import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleDelete = (id) => {
    const confirm = window.confirm("are you sure delete this user?");
    if (confirm) {
      console.log(id);
      const url = `http://localhost:5000/users/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            const remaining = users.filter((user) => user._id !== id);
            setUsers(remaining);
          }
        });
    }
  };
  return (
    <div>
      <h1>all user</h1>
      {users.map((user) => (
        <li key={user._id}>
          {user.name}:: {user.email}
          <Link to={`/update/${user._id}`}>
            <button>updata</button>
          </Link>
          <button onClick={() => handleDelete(user._id)}>X</button>
        </li>
      ))}
    </div>
  );
};

export default Users;
