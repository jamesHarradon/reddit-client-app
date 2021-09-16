import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectTopic, loadTopic } from "../topic/topicSlice";
import Post from "../post/Post";

export default function TopicPage() {

    const topic = useSelector(selectTopic);
    const dispatch = useDispatch();

    const getName = (url) => {
        let urlString = url.toString();
        return urlString.substring(urlString.lastIndexOf('/')+1);
    }

    useEffect(() => {
        
        dispatch(loadTopic(getName(window.location.pathname)))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        
        <div>
            <div>
                <h1 className='subreddit-header'>{getName(window.location.pathname)}</h1>
                <h3 className='subreddit-prefixed'>{`r/${getName(window.location.pathname)}`}</h3>
            </div>
            <div className='posts-grid-container'> 
                {topic.map((post) => <Post post={post} /> )}
            </div>
        </div>
    )
}