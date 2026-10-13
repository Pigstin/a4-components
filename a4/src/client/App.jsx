import { useState } from "react";
import { fancifyTime } from "./util";
import "./App.css";

function App() {
	const [serverData, setData] = useState([]);

	const current = fancifyTime(Date.now())

	async function handleSubmit(e) {
		// Read the form data
		// console.log(e)
		console.log(JSON.stringify(Object.fromEntries(e)))
		const response = await fetch(`/data`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(Object.fromEntries(e)) 
        })
		// alert(`You searched for '${formData}'`);
		refresh();
	}

	function populateTable(data) {
		console.log(serverData)
		let tmp = serverData.map(data => {
			return (
			<tr>
				<td>{data["entry"]}</td>
				<td>{fancifyTime(data["deadline"])}</td>
				<td>{data["priority"]}</td>
				<td>{data["order"]}</td>
			</tr>
			)		
		})

		return tmp
	}
	
	async function refresh() {
		const response = await fetch(`/data`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
		// console.log(response.json())
		console.log(serverData)
		setData(await response.json())
	}

	return (
		<div className="tableHolder">
			<span>
				add new entry here:
			</span>
			<form action={handleSubmit}>
				<input type='text' name='entryname' id='entryname' defaultValue='entry name' />
				<input type='datetime-local' name='deadline' id='deadline' defaultValue={current} />
				<input type="number" name='priority' id='priority' min="1" max="5" step="1" defaultValue="2" />
				<button type='submit' id='submit'>submit</button>
			</form>
			<table id='table'>
				<thead>
					<tr>
						<th>Entry:</th>
						<th>Deadline:</th>
						<th>Priority:</th>
						<th>Order:</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{serverData ? populateTable(serverData) : <></>}
				</tbody>
			</table>
			<button id='refresh' onClick={refresh}>refresh</button>
		</div>
	);
}

export default App;
