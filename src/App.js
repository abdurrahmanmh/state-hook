import logo from "./logo.svg";
import React from "react";
import "./App.css";
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import HookCounter2 from "./components/HookCounter2";
import HookCounter3 from "./components/HookCounter3";
import HookCounter4 from "./components/HookCounter4";
import ClassCounter1 from "./components/ClassCounter1";
import HookCounter1 from "./components/HookCounter1";
import ClassMouse from "./components/ClassMouse";
import HookMouse from "./components/HookMouse";
import MouseContainer from "./components/MouseContainer";
import IntervalClassCounter from "./components/IntervalClassCounter";
import IntervalHookCounter from "./components/IntervalHookCounter";
import DataFetching from "./components/DataFetching";
import ComponentC from "./components/ComponentC";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      <h3>Counter two use reducer</h3>
      <CounterTwo/>
      <h3>use reducer</h3>
      <CounterOne/>

      <UserContext.Provider value={"Wish Wash"}>
        <h3>Use Context Hook</h3>
        <ChannelContext.Provider value={"Codashop"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>

      <DataFetching />
      <h3>Interval Hook Counter</h3>
      <IntervalHookCounter />
      <h3>Interval Class Counter</h3>
      <IntervalClassCounter />
      <h3>Mouse Container</h3>
      <MouseContainer />

      <h3>Hook Mouse</h3>
      <HookMouse />
      <h3>Mouse Class</h3>
      <ClassMouse />

      <h3>Hook Counter 1</h3>
      <HookCounter1 />
      <h3>Class Counter 1</h3>
      <ClassCounter1 />
      <h3>Hook Counter 4</h3>
      <HookCounter4 />
      <h3>Hook Counter 3</h3>
      <HookCounter3 />
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
