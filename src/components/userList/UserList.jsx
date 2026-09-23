import React from "react";
import "./UserList.css";
function UserList({ users }) {
  return (
    <div className="userList">
      <div className="userList-container container">
        {users.map((user) => {
          return (
            <div className="card">
              <div className="card-inner" key={user.id}>
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
                <button>delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserList;
