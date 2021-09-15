import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectHasFailed, selectIsLoading, selectComments, loadCommentsByTerm, selectMainPost } from "./commentsSlice";
import { postedWhen } from "../../util/postedWhenFunc";
import { Link } from "react-router-dom";
import arrow from '../../images/arrow.png';
import { reduceText } from "../../util/reduceText";


export default function Comments () {

    let comments = useSelector(selectComments);
    let posts = useSelector(selectMainPost);
        
    // alert(comments);
    console.log(posts)
    console.log(comments)
    
    return (
        <div className='post-comment-container'>
                    <div className='posts-container'>
            <div className='posts-grid-container'> 
            {posts.map((post) =>            
                (
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
                            {/* <img id='post-image' src={selectImage(post.data.thumbnail)} alt='post thumbnail'></img> */}
                            <h3 className='post-title'>{reduceText(post.data.title)}</h3>                           
                        </div> 
                )  
            )}
            </div>
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

