import logo from "./logo.svg";
import "./App.css";
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import HookCounter2 from "./components/HookCounter2";

function App() {
  return (
    <div className="App">
      <h3>Hook Counter 2</h3>
      <HookCounter2 />
      <h3>Hook Counter</h3>
      <HookCounter />
      <h3>Class Counter</h3>
      <ClassCounter />
    </div>
  );
}

export default App;
