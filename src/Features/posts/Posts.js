import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectHasFailed, selectIsLoading, selectPosts, loadPostsByTerm } from "./postsSlice";
import arrow from '../../images/arrow.png';
import bubble from '../../images/bubble.png';
import { postedWhen } from "../../util/postedWhenFunc";
import { Link } from "react-router-dom";

export default function Posts(props) {
    
    const posts = useSelector(selectPosts);
    const dispatch = useDispatch();

    useEffect (() => {
        dispatch(loadPostsByTerm(props.input));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div className='posts-container'>
        <h1>Search Results</h1>
            <div className='posts-grid-container'> 
            {posts.map((post) =>            
                (
                    //<Link to={`/comments/${post.data.id}`}>
                        <div key={post.data.id} className='post'>
                            <ul className='post-rating'>
                                <li><img id='arrow' src={arrow} alt='arrow'></img></li>
                                <li>{post.data.score}</li> 
                            </ul>
                            <ul className='post-about'>
                                <li>{post.data.subreddit_name_prefixed}</li>
                                <li>{post.data.author}</li>
                                <li>{postedWhen(post.data.created)}</li>
                            </ul>
                            <h3 className='post-title'>{post.data.title}</h3>
                            <ul className='post-bottom'>
                                <li><img src={bubble} alt='bubble'></img></li>
                                <li>{post.data.num_comments}</li>
                            </ul>
                        </div>
                    //</Link>
                    
    
                )
            )}
            </div>
        </div>
    )
}