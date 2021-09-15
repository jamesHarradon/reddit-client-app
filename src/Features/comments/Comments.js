import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectHasFailed, selectIsLoading, selectComments, loadCommentsByTerm, selectMainPost } from "./commentsSlice";
import { postedWhen } from "../../util/postedWhenFunc";
import { Link } from "react-router-dom";
import arrow from '../../images/arrow.png';
import { reduceText } from "../../util/reduceText";
import Post from "../post/Post";


export default function Comments () {


    let comments = useSelector(selectComments);
    let posts = useSelector(selectMainPost);
    
    return (
        <div className='post-comment-page-container'>
            <div className='post-c-container'>
                {posts.map((post) => <Post post={post} />)}
            </div>
            <div className='comments-container'>
                <h1>Comments</h1>
                    <div className='comments-grid-container'>
                    {comments.map((comment) => (
                        <div key={comment.data.id} className='comment'>
                            <span className='comment-author'>
                                <h3>{comment.data.author}</h3>
                            </span>
                            <ul className='comment-body-created'>
                                <li>{comment.data.body}</li>
                                <li>{postedWhen(comment.data.created)}</li>
                            </ul>
        
                        </div>
                    ))}
                    </div>
            </div>
        </div>    
    )
}

