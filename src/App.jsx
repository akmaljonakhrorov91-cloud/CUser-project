import "./App.css";
// components
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import UserList from "./components/userList/UserList";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([
    ,
    {
      id: 1,
      imageURL: "https://picsum.photos/200/300?random=1",
      name: "Akmaljon",
      surname: "Akhrorov",
      age: "35",
      from: "Uzbekistan",
      job: "developer",
    },
    {
      id: 2,
      imageURL: "https://picsum.photos/200/300?random=2",
      name: "Akmaljon",
      surname: "Akhrorov",
      age: "35",
      from: "Uzbekistan",
      job: "developer",
    },
    {
      id: 3,
      imageURL: "https://picsum.photos/200/300?random=3",
      name: "Akmaljon",
      surname: "Akhrorov",
      age: "35",
      from: "Uzbekistan",
      job: "developer",
    },
    {
      id: 4,
      imageURL: "https://picsum.photos/200/300?random=4",
      name: "Akmaljon",
      surname: "Akhrorov",
      age: "35",
      from: "Uzbekistan",
      job: "developer",
    },
    {
      id: 5,
      imageURL: "https://picsum.photos/200/300?random=5",
      name: "Akmaljon",
      surname: "Akhrorov",
      age: "35",
      from: "Uzbekistan",
      job: "developer",
    },
  ]);
  return (
    <>
      <Navbar usersLength={users.length} />
      <main>
        <UserList users={users} />
        <div className="no-users">{users.length === 0 && "No Users"}</div>
      </main>
      <Footer />
    </>
  );
}

export default App;
