import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectHasFailed, selectIsLoading, selectComments, loadCommentsByTerm, selectMainPost } from "./commentsSlice";
import { postedWhen } from "../../util/postedWhenFunc";
import { Link } from "react-router-dom";
import arrow from '../../images/arrow.png';
import { reduceText } from "../../util/reduceText";
import Post from "../post/Post";
import { randomImage } from "../../util/defaultIcon";

import redOne from '../../images/red-one.png';
import redTwo from '../../images/red-two.png';
import redThree from '../../images/red-three.png';
import redFour from '../../images/red-four.png';
import redFive from '../../images/red-five.png';
import redSix from '../../images/red-six.png';
import redSeven from '../../images/red-seven.png';
import redEight from '../../images/red-eight.png';


export default function Comments () {

    let imgArr = [redOne, redTwo, redThree, redFour, redFive, redSix, redSeven, redEight];

    const selectImage = (img) => {
        return randomImage(imgArr);
    }


    let comments = useSelector(selectComments);
    let posts = useSelector(selectMainPost);
    
    return (
        <div className='post-comment-page-container'>
            <h1>Comments</h1>
            <div className='post-c-container'>
                {posts.map((post) => <Post post={post} />)}
            </div>
            <div className='comments-container'>
                
                    <div className='comments-grid-container'>
                    
                    {comments.map((comment) => (
                        <div key={comment.data.id} className='comment'>
                            <img className='comment-image' src={selectImage(null)} alt='author'></img>
                            <div className='comment-header'>
                                <h3 className='comment-author'>{comment.data.author}</h3>
                                <p className='comment-posted'>{postedWhen(comment.data.created)}</p>
                            </div>
                            <ul className='comment-body-created'>
                                <li className='comment-body'>{comment.data.body}</li>
                                
                            </ul>
                        </div>
                    ))}
                    </div>
            </div>
        </div>    
    )
}

