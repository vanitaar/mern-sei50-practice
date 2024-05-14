import { login } from "../../utilities/users-service";
import { useNavigate } from "react-router-dom";
import debug from "debug";

const log = debug("mern:components:LoginForm");

export default function LoginForm({ setUser }) {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    log("data: %o", data);
    const { email, password } = data;
    const user = await login(email, password);
    setUser(user);
    navigate("/orders");
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Login</legend>

        <label>
          Email:
          <input name="email" />
        </label>
        <br />

        <label>
          Password:
          <input name="password" />
        </label>
        <br />
        <button>Login</button>
      </fieldset>
    </form>
  );
}

// export default function LoginForm({ setUser }) {
//   const [credentials, setCredentials] = useState({
//     email: "",
//     password: "",
//   });
//   const [error, setError] = useState("");

//   function handleChange(evt) {
//     setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
//     setError("");
//   }

//   async function handleSubmit(evt) {
//     // Prevent form from being submitted to the server
//     evt.preventDefault();
//     try {
//       // The promise returned by the signUp service method
//       // will resolve to the user object included in the
//       // payload of the JSON Web Token (JWT)
//       const user = await usersService.login(credentials);
//       setUser(user);
//     } catch {
//       setError("Log In Failed - Try Again");
//     }
//   }

//   return (
//     <div>
//       <div className="form-container">
//         <form autoComplete="off" onSubmit={handleSubmit}>
//           <label>Email</label>
//           <input
//             type="text"
//             name="email"
//             value={credentials.email}
//             onChange={handleChange}
//             required
//           />
//           <label>Password</label>
//           <input
//             type="password"
//             name="password"
//             value={credentials.password}
//             onChange={handleChange}
//             required
//           />
//           <button type="submit">LOG IN</button>
//         </form>
//       </div>
//       <p className="error-message">&nbsp;{error}</p>
//     </div>
//   );
// }
