import debug from "debug";
import { useState } from "react";
import AuthPage from "../AuthPage/AuthPage";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import { Route, Routes } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import { getUser } from "../../utilities/users-service";

const log = debug("mern:pages:App:App");

function App() {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState(getUser()); //set as empty {} for testing //if not leave blank === explicitly state null --> show authpage
  log("user %o", user);

  if (!user) {
    return (
      <main className="App">
        <AuthPage />
      </main>
    );
  }

  return (
    <>
      <main className="App">
        <NavBar />
        <Routes>
          <Route path="/orders" element={<OrderHistoryPage />}></Route>
          <Route path="/orders/new" element={<NewOrderPage />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
