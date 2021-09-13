import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectHasFailed, selectIsLoading, selectTopics, loadSubredditsByTopic } from "./topicsSlice";

export default function Topics() {
    const topics = useSelector(selectTopics);
    const dispatch = useDispatch();


    return (
        <div className='posts-container'>
        <h1>Topics Results</h1>
            <div className='topics-grid-container'> 
            {topics.map((topic) =>            
                (
                    <div key={topic.data.id} className='topics'>
                        <h3 className='topics-title'>
                            <li>{topic.data.title}</li> 
                        </h3>
                        <div className='topics-description'>
                            <p>{topic.data.public_description}</p>
                        </div>
                        
                        <ul className='topics-bottom'>
                            <li>{topic.data.subscribers} Subscribers</li>
                        </ul>
                    </div>
    
                )
            )}
            </div>
        </div>

    )





}