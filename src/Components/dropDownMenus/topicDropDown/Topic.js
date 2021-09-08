import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadSubredditsByTopic } from '../../../Features/topics/topicsSlice';

function TopicDropDown () {

    const [select, setSelect] = useState('');
    const dispatch = useDispatch();

    return (
    <select onSubmit={dispatch(loadSubredditsByTopic(select))} onChange={(event) => setSelect(event.target.value)} id='topic' name='topic'>
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
    </select> ); 
};

export default TopicDropDown;