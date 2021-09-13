import Posts from './Features/posts/Posts';
import Trending from './Features/trending/Trending';
import Topics from './Features/topics/Topics';
import './App.css';
import './index.css';
import ToolBar from './Components/toolbar/ToolBar';
import TopicDropDown from './Components/dropDownMenus/topicDropDown/Topic';
import Comments from './Features/comments/Comments';
import React from 'react';
import logo from '../src/images/reddit-logo.png';
import logoText from '../src/images/reddit-text.png';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <div className='topbar'>
          <div className='app-name'>
            <img id='logo' src={logo} alt='reddit logo'/><br></br>
            <img src={logoText} alt='reddit text' />
            <h1>Relaxed</h1>
          </div>
          <ToolBar />
          <TopicDropDown />
        </div>
        <Topics />
        <Posts />
          
        
        <Comments />
        <Trending />
      </div>
    </Router>
  );
}

export default App;