import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadPostsByTerm } from '../../Features/posts/postsSlice';
import { Link, NavLink } from 'react-router-dom';


function ToolBar(props) {
    const dispatch = useDispatch();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(loadPostsByTerm(props.input));
    }


    const btnRender = () => {
        if(window.location.toString().includes('posts')) {
            return <button type="submit">Search</button>
        } else {
            return (
                <Link to={`/posts`}>
                    <button type='submit'>Search</button>
                </Link>
            )
        }
    }

    return  (
        <form id='searchbar' >
            <label htmlFor="header-search">
                <span className="visually-hidden">Reddit Posts</span>
            </label>
            <input 
                type="text"
                id="header-search"
                placeholder="Enter a keyword"
                onChange={(e) => props.onChangeHandler(e)}
                name="s" 
            />
            
            {btnRender()}
            
        </form>
    );

}


export default ToolBar;

