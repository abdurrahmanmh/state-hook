import logo from "./logo.svg";
import "./App.css";
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import HookCounter2 from "./components/HookCounter2";
import HookCounter3 from "./components/HookCounter3";
import HookCounter4 from "./components/HookCounter4";

function App() {
  return (
    <div className="App">

      
      <h3>Hook Counter 4</h3>
      <HookCounter4/>
      <h3>Hook Counter 3</h3>
      <HookCounter3/>
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
