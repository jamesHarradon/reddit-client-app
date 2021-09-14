import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectHasFailed, selectIsLoading, selectPosts, loadPostsByTerm } from "./postsSlice";
import arrow from '../../images/arrow.png';
import bubble from '../../images/bubble.png';
import { postedWhen } from "../../util/postedWhenFunc";
import { Link } from "react-router-dom";

import { loadComments } from "../comments/commentsSlice";

import { reduceText } from "../../util/reduceText";


import { randomImage } from '../../util/defaultIcon';

import redOne from '../../images/red-one.png';
import redTwo from '../../images/red-two.png';
import redThree from '../../images/red-three.png';
import redFour from '../../images/red-four.png';
import redFive from '../../images/red-five.png';
import redSix from '../../images/red-six.png';
import redSeven from '../../images/red-seven.png';
import redEight from '../../images/red-eight.png';

export default function Posts(props) {
    
    const posts = useSelector(selectPosts);
    const dispatch = useDispatch();

    let imgArr = [redOne, redTwo, redThree, redFour, redFive, redSix, redSeven, redEight];

    const selectImage = (img) => {
        if (img === 'default' || !img) {
            return randomImage(imgArr);
        } else {
            return img;
        }
    }

    useEffect (() => {
        dispatch(loadPostsByTerm(props.input));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // const loadComments = (url) => {
    //     dispatch(getComments(url))
    // }




    return (
        <div className='posts-container'>
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
                            <img id='post-image' src={selectImage(post.data.thumbnail)} alt='post thumbnail'></img>
                            <h3 className='post-title'>{reduceText(post.data.title)}</h3>
                            
                            <ul className='post-bottom'>

                                <li><img src={bubble} alt='bubble'
                                onClick={()=> dispatch(loadComments(`https://www.reddit.com/${post.data.subreddit_name_prefixed}/comments/${post.data.id}.json`))}></img></li>

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