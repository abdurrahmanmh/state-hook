import React, { useState } from "react";

function HookCounter3() {
  const [name, setName] = useState({ firstname: "", lastName: "" });
  return (
    <div>
      <input
        type="text"
        value={name.firstname}
        onChange={(e) => setName({...name, firstname: e.target.value })}
      ></input>
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({...name, lastName: e.target.value })}
      ></input>
      <h2>Your First Name is - {name.firstname}</h2>
      <h2>Your Last Name is - {name.lastName}</h2>
      <h2>{JSON.stringify(name)}</h2>
    </div>
  )
}

export default HookCounter3;
