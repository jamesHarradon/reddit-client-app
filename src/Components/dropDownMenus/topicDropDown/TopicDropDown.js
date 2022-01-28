import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadSubredditsByTopic } from '../../../Features/topics/topicsSlice';
import { useHistory } from 'react-router-dom';


function TopicDropDown () {

    const [select, setSelect] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    

    const onChangeHandler = (e) => {
        e.preventDefault();
        history.push('/topics');
        setSelect(e.target.value)
    }

    useEffect(() => {
        dispatch(loadSubredditsByTopic(select))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[select])

    return (
        
            <select onChange={onChangeHandler} id='topic-select' data-testid='topic-select' name='topic'>
                
                <option value='defaultValue'>Search Subreddits</option>  
                    <option value='AskReddit'>AskReddit</option>
                    <option value='funny'>Funny</option>
                    <option value='worldnews'>World News</option>
                    <option value='Instant_regret'>Instant_regret</option>
                    <option value='gaming'>Gaming</option>
                    <option value='Futurology'>Futurology</option>
                    <option value='Music'>Music</option>
                    <option value='Gifs'>Gifs</option>
                    <option value='food'>Food</option>
                    <option value='PhotoshopBattles'>PhotoshopBattles</option>
                    <option value='MemeEconomy'>MemeEconomy</option>
                    <option value='askscience'>askscience</option>
                    <option value='Books'>Books</option>
                    <option value='movies'>Movies</option>
                    <option value='Showerthoughts'>Shower Thoughts</option>
                
            </select> 
        
    );
};

export default TopicDropDown;