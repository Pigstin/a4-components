import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="tableHolder">
      <table id='table'>
        <tr>
          <th>Entry:</th>
          <th>Deadline:</th>
          <th>Priority:</th>
          <th></th>
        </tr>
      </table>
      <button id='refresh'>refresh</button>
    </div>
  );
}

export default App;
