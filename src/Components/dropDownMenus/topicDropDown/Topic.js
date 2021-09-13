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
        
            <select onChange={onChangeHandler} id='topic-select' name='topic'>
                
                    <option value='defaultValue'>Topic - No Selection</option>  
                    <option value='Missspelled'>Missspelled</option>
                    <option value='NetflixEvents'>NetflixEvents</option>
                    <option value='foodobjects'>foodobjects</option>
                    <option value='TheHolidays'>TheHolidays</option>
                    <option value='Futurology'>Futurology</option>
                    <option value='NatureIsFuckingLit'>NatureIsFuckingLit</option>
                    <option value='Gifs'>Gifs</option>
                    <option value='PhotoshopBattles'>PhotoshopBattles</option>
                    <option value='MemeEconomy'>MemeEconomy</option>
                    <option value='askscience'>askscience</option>
                    <option value='Books'>Books</option>
                
            </select> 
        
    );
};

export default TopicDropDown;