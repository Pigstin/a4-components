import { useState } from "react";
import { fancifyTime } from "./util";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const current = fancifyTime(Date.now())
  
  function handleSubmit(e) {
      console.log(e)
      
      // Read the form data
      const form = e.target;
      const formData = new FormData(form);
      const query = formData.get("deadline");
      alert(`You searched for '${query}'`);
  }

  return (
    <div className="tableHolder">
      <span>
        add new entry here: 
      </span>
      <form action={handleSubmit}>
          <input type='text' name='entryname' id='entryname' defaultValue='entry name'/>
          <input type='datetime-local' name='deadline' id='deadline' defaultValue={current}/> 
          <input type="number" name='priority' id='priority' min="1" max="5" step="1" defaultValue="2"/>
          <button type='submit' id='submit'>submit</button>
      </form>
      <table id='table'>
        <thead>
          <tr>
            <th>Entry:</th>
            <th>Deadline:</th>
            <th>Priority:</th>
            <th></th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
      <button id='refresh'>refresh</button>
    </div>
  );
}

export default App;
