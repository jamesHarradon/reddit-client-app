import React, { useState } from 'react';


function ToolBar() {
    const [input, setInput] = useState('');

    return  (
        <form onSubmit={() => console.log(input)} action="/" method="get">
            <label htmlFor="header-search">
                <span className="visually-hidden">Reddit Posts</span>
            </label>
            <input 
                type="text"
                id="header-search"
                placeholder="Enter a keyword"
                onChange={(event) => setInput(event.target.value)}
                name="s" 
            />
            <button type="submit">Search</button>
        </form>);

}


export default ToolBar;

