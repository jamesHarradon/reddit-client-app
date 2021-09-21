import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectPosts, loadPostsByTerm } from "./postsSlice";

import Post from "../post/Post";

export default function Posts(props) {
    
    const posts = useSelector(selectPosts);
    const dispatch = useDispatch();


    useEffect (() => {
        dispatch(loadPostsByTerm(props.input));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='posts-container'>
          <h1 id='search-header'>Search Results</h1>
            <div className='posts-grid-container'> 
                {posts.map((post) => <Post key={post.data.id} post={post} /> )}
            </div>
        </div>
    )
}