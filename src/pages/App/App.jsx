import debug from "debug";
const log = debug("mern:pages:App:App");

function App() {
  log("hello App"); //to test debug log
  return (
    <>
      <main className="App">App</main>
    </>
  );
}

export default App;
