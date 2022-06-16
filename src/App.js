import { useEffect, useState } from "react";
import "./App.css";
import { FiEye, FiEyeOff } from "react-icons/fi";

function App() {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    roletype: "",
  });
  const { username, email, password, roletype } = userData;
  const [passwordType, setPasswordType] = useState("password");
  const [eye, setEye] = useState(true);
  const [disabled, setisDisabled] = useState(true);
  const onInputChange = (e) => {
    setUserData({ ...userData, [e.target?.name]: e.target?.value });
  };

  const Eye = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      setEye(false);
    } else {
      setPasswordType("password");
      setEye(true);
    }
  };

  useEffect(() => {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    setisDisabled(
      !username ||
        !regex.test(email) ||
        password.length<8 ||
        roletype === "default" ||
        !roletype
    );
  }, [email, password, username, roletype]);
  return (
    <>
      <div className="container">
          <div className="box">
            <div>
              <h2>Let's set up your account</h2>
              <p>
                Already have an account?{" "}
                <span style={{ color: "blue" }}>Sign in</span>
              </p>
              <form>
                <div className="inputBox">
                  <input
                    type="text"
                    name="username"
                    required
                    onChange={(e) => onInputChange(e)}
                    value={username}
                  />
                  <label>Username</label>
                </div>
                <div className="inputBox">
                  <input
                    type="email"
                    name="email"
                    required
                    onChange={(e) => onInputChange(e)}
                    value={email}
                  />
                  <label>Email address</label>
                  <span className="error" style={{marginBottom:'1rem',marginTop:'-1.75rem'}}>Please enter a valid address</span>
                </div>

                <div className="inputBox">
                  <select
                    required
                    onChange={(e) => onInputChange(e)}
                    name="roletype"
                  >
                    <option value="default">
                      I would describe my user type as
                    </option>
                    <option value="developer">Developer</option>
                    <option value="UI Designer">UI Designer</option>
                  </select>
                </div>

                <div className="inputBox">
                  <input
                    type={passwordType}
                    name="password"
                    required
                    onChange={(e) => onInputChange(e)}
                    value={password}
                    style={{ marginBottom: "2px" }}
                  />

                  <span className="field-icon" onClick={Eye}>
                    {eye ? <FiEye /> : <FiEyeOff />}
                  </span>
                  <label>Password</label>
                </div>
                <p>Minimum 8 Characters</p>
                <div className="inputBox">
                  <button type="submit" name="sign-in" disabled={disabled}>
                    Next
                  </button>
                </div>
              </form>
            </div>
          </div>
        <div className="boxright">
          <div> <h1>Dummy Heading</h1></div>
        </div>
      </div>
    </>
  );
}

export default App;
