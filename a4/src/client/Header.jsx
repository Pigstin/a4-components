import { useState } from "react";
import { fancifyTime } from "./util";

function Header() {

    function handleSubmit() {

    }

    return (
    <div className="Header">
        <span>
            add new entry here: 
        </span>
        <form onSubmit={this.handleSubmit}>
            
            <input type='text' id='entryname' value='entry name'/>
            <input type='datetime-local' id='deadline' value={fancifyTime(Date.now())}/> 
            <input type="number" id='priority' name='priority' min="1" max="5" step="1" value="2"/>
            <button id='submit'>submit</button>

        </form>
    </div>
)
}

export default Header;