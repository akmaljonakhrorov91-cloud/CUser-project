import "./NewUserForm.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
function NewUserForm({ addUSers }) {
  const [users, setUSers] = useState([
    {
      id: uuidv4(),
      imageURL: "",
      name: "",
      surname: "",
      age: "35",
      from: "",
      job: "",
      gender: "",
    },
  ]);
  const handelSubmit = (e) => {
    e.preventDefault();
    addUSers(users);
  };
  return (
    <div className="overlay">
      <div className="modal-wrapper">
        <div className="modal">
          <form onSubmit={handelSubmit}>
            <label>
              <span>paste image URL:</span>
              <input
                onChange={(e) =>
                  setUSers((prev) => {
                    return { ...prev, imageURL: e.target.value };
                  })
                }
                type="url"
                required
              />
            </label>
            <label>
              <span>type your name:</span>
              <input
                onChange={(e) =>
                  setUSers((prev) => {
                    return { ...prev, name: e.target.value };
                  })
                }
                type="text"
                required
              />
            </label>
            <label>
              <span>type your surname:</span>
              <input
                onChange={(e) =>
                  setUSers((prev) => {
                    return { ...prev, surname: e.target.value };
                  })
                }
                type="text"
                required
              />
            </label>
            <label>
              <span>type your age:</span>
              <input
                onChange={(e) =>
                  setUSers((prev) => {
                    return { ...prev, age: e.target.value };
                  })
                }
                type="number"
                required
              />
            </label>
            <label>
              <span>type your job:</span>
              <input
                onChange={(e) =>
                  setUSers((prev) => {
                    return { ...prev, job: e.target.value };
                  })
                }
                type="text"
                required
              />
            </label>
            <label>
              <span>from :</span>
              <input
                onChange={(e) =>
                  setUSers((prev) => {
                    return { ...prev, from: e.target.value };
                  })
                }
                type="text"
                required
              />
            </label>
            <div className="gender">
              <span>Gender</span>
              <label>
                <small>male: </small>
                <input
                  onChange={(e) =>
                    setUSers((prev) => {
                      return { ...prev, gender: e.target.value };
                    })
                  }
                  type="radio"
                  required
                  name="gender"
                  value="male"
                />
              </label>
              <label>
                <small>female: </small>
                <input
                  onChange={(e) =>
                    setUSers((prev) => {
                      return { ...prev, gender: e.target.value };
                    })
                  }
                  type="radio"
                  required
                  name="gender"
                  value="female"
                />
              </label>
            </div>
            <button className="modal-btn">submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewUserForm;
