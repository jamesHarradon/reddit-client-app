import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadPostsByTerm } from '../../Features/posts/postsSlice';
import { Link, NavLink } from 'react-router-dom';


function ToolBar() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const onChangeHandler = (e) => {
        e.preventDefault();
        setInput(e.target.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(loadPostsByTerm(input))
    }

    return  (
        <form id='searchbar' onSubmit={onSubmitHandler}>
            <label htmlFor="header-search">
                <span className="visually-hidden">Reddit Posts</span>
            </label>
            <input 
                type="text"
                id="header-search"
                placeholder="Enter a keyword"
                onChange={(e) => onChangeHandler(e)}
                name="s" 
            />
            
            
            <button type="submit">Search</button>
            
            
            
        </form>);

}


export default ToolBar;

