import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectHasFailed, selectIsLoading, selectComments, loadCommentsByTerm } from "./commentsSlice";
import { postedWhen } from "../../util/postedWhenFunc";
import { Link } from "react-router-dom";


export default function Comments () {

    const comments = useSelector(selectComments);
    const dispatch = useDispatch();

    return (
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
                            <text>{postedWhen(comment.data.created)}</text>
                        </ul>
      
                    </div>
                ))}
                </div>
            
        </div>
    )
}

