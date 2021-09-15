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

    // useEffect(() => {
        
    //     dispatch(loadTopic(getName('books')));
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // },[])

    return (
        
        <div>
            <div>
                <h1>test</h1>
                <h3>test</h3>
            </div>
            <div>
                {topic.map(topic => <Post post={topic} /> )}
            </div>
        </div>
    )
}