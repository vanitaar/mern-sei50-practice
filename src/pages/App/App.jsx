import debug from "debug";
import { useState } from "react";
import AuthPage from "../AuthPage/AuthPage";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";

const log = debug("mern:pages:App:App");

function App() {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState();
  log("user %o", user);

  return (
    <>
      <main className="App">App</main>
      <AuthPage />
      <NewOrderPage />
      <OrderHistoryPage />
    </>
  );
}

export default App;
