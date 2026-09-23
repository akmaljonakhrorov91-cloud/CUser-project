import React from "react";
import "./UserList.css";
function UserList({ users, deleteUSers }) {
  return (
    <div className="userList">
      <div className="userList-container container">
        {users.map((user) => {
          return (
            <div className="card" key={user.id}>
              <div className="card-inner">
                <img
                  src={user.imageURL}
                  alt={user.name}
                  height={150}
                  width={150}
                />
                <h2>
                  {user.name} {user.surname}, {user.age} age
                </h2>
                <p>From: {user.from}</p>
                <p>Job: {user.job}</p>
                <button onClick={() => deleteUSers(user.id)}>delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserList;
