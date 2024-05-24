import logo from "./logo.svg";
import "./App.css";
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";

function App() {
  return (
    <div className="App">
      <h3>Hook Counter</h3>
      <HookCounter />
      <h3>Class Counter</h3>
      <ClassCounter />
    </div>
  );
}

export default App;
