import "./NewUserForm.css";

function NewUserForm() {
  return (
    <div className="overlay">
      <div className="modal-wrapper">
        <div className="modal">
          <form>
            <label>
              <span>paste image URL:</span>
              <input type="url" required />
            </label>
            <label>
              <span>type your name:</span>
              <input type="text" required />
            </label>
            <label>
              <span>type your surname:</span>
              <input type="text" required />
            </label>
            <label>
              <span>type your age:</span>
              <input type="number" required />
            </label>
            <label>
              <span>type your job:</span>
              <input type="text" required />
            </label>
            <label>
              <span>from :</span>
              <input type="text" required />
            </label>
            <div className="gender">
              <span>Gender</span>
              <label>
                <small>male: </small>
                <input type="radio" required name="gender" value="male" />
              </label>
              <label>
                <small>female: </small>
                <input type="radio" required name="gender" value="female" />
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
