import "./App.css";
// components
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import UserList from "./components/userList/UserList";
import { useState } from "react";
import NewUserForm from "./components/newuser/NewUserForm";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([]);
  const DeleteUSers = (id) => {
    // let response = users.filter((data) => {
    //   return id !== data.id;
    // });
    // setUsers(response);
    setUsers((prev) => {
      return prev.filter((data) => {
        return data.id !== id;
      });
    });
  };
  const showModalFunc = () => {
    setShowModal(true);
  };
  const closeModal = (e) => {
    if (e.target.className === "overlay") setShowModal(false);
    if (e.key === "Escape") setShowModal(false);
  };
  const addUSers = (user) => {
    setUsers((prev) => {
      return [...prev, user];
    });
    setShowModal(false);
  };
  return (
    <div onClick={closeModal} onKeyDown={closeModal} className="App">
      <Navbar usersLength={users.length} />
      <main>
        <UserList users={users} deleteUSers={DeleteUSers} />
        <div className="no-users">{users.length === 0 && "No Users"}</div>
      </main>
      {showModal && <NewUserForm addUSers={addUSers} />}
      <button onClick={() => showModalFunc()}>
        <div className="create-user">Create users</div>
      </button>
      <Footer />
    </div>
  );
}

export default App;
