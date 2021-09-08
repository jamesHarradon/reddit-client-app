import Posts from './Features/posts/Posts';
import Trending from './Features/trending/Trending';
import { Topics } from './Features/topics/Topics';
import './App.css';
import './index.css';
import ToolBar from './Components/toolbar/ToolBar';
import DropDownCountry from './Components/dropDownMenus/countryDropDown/Country';
import TopicDropDown from './Components/dropDownMenus/topicDropDown/Topic'
import React from 'react';


function App() {
  return (
    <div className="App">
      <div className='topbar'>
        <ToolBar />
        <TopicDropDown />
      </div>
      <Topics />
      <Posts />
      <Trending />
    </div>
  );
}

export default App;