import { useSelector } from "react-redux";
import { selectTopics } from "./topicsSlice";
import Topic from "../topic/Topic";

export default function Topics() {
    const topics = useSelector(selectTopics);
    const topicsFiltered = topics.filter(topic => topic.kind !== 't2');
    
    return (
        <div className='posts-container'>
          <h1 id='subreddit-header'>Subreddits</h1>
            <div className='topics-grid-container'> 
            {topicsFiltered.map((topic) => <Topic topic={topic} />)}
            </div>
        </div>

    )
}