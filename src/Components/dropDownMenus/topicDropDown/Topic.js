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
                
                    <option value='defaultValue' data-testid='topics'>Topic - No Selection</option>  
                    <option value='Missspelled' data-testid='topics'>Missspelled</option>
                    <option value='NetflixEvents' data-testid='topics'>NetflixEvents</option>
                    <option value='foodobjects' data-testid='topics'>foodobjects</option>
                    <option value='TheHolidays' data-testid='topics'>TheHolidays</option>
                    <option value='Futurology' data-testid='topics'>Futurology</option>
                    <option value='NatureIsFuckingLit' data-testid='topics'>NatureIsFuckingLit</option>
                    <option value='Gifs' data-testid='topics'>Gifs</option>
                    <option value='PhotoshopBattles' data-testid='topics'>PhotoshopBattles</option>
                    <option value='MemeEconomy' data-testid='topics'>MemeEconomy</option>
                    <option value='askscience' data-testid='topics'>askscience</option>
                    <option value='Books' data-testid='topics'>Books</option>
                
            </select> 
        
    );
};

export default TopicDropDown;