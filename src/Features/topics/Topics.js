import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectHasFailed, selectIsLoading, selectTopics, loadSubredditsByTopic } from "./topicsSlice";
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


export default function Topics() {
    const topics = useSelector(selectTopics);
    const topicsFiltered = topics.filter(topic => topic.kind !== 't2');
    const dispatch = useDispatch();

    let imgArr = [redOne, redTwo, redThree, redFour, redFive, redSix, redSeven, redEight];


    return (
        <div className='posts-container'>
          <h1 id='subreddit-header'>Subreddits</h1>
            <div className='topics-grid-container'> 
            {topicsFiltered.map((topic) =>            
                (
                    <div key={topic.data.id} className='topics'>
                        <h3 className='topics-title'>
                            <li>{topic.data.title}</li> 
                        </h3>
                        <div className='topics-description'>
                            <img id='topic-image' src={topic.data.icon_img  || randomImage(imgArr)} alt='topic icon'></img>
                            <p>{reduceText(topic.data.public_description)}</p>
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