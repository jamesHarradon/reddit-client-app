import React, { useState } from 'react';
import Posts from './Features/posts/Posts';
import Trending from './Features/trending/Trending';
import Topics from './Features/topics/Topics';
import './App.css';
import './index.css';
import ToolBar from './Components/toolbar/ToolBar';
import TopicDropDown from './Components/dropDownMenus/topicDropDown/Topic';
import Comments from './Features/comments/Comments';
import logo from '../src/images/reddit-logo.png';
import logoText from '../src/images/reddit-text.png';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {

  const [input, setInput] = useState('');

  const onChangeHandler = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  }

  return (
    <Router>
      <div className="App">
        <div className='topbar'>
          <div className='app-name'>
            <img id='logo' src={logo} alt='reddit logo'/><br></br>
            <img src={logoText} alt='reddit text' />
            <h1>Relaxed</h1>
          </div>
          <div className='searches'>
            <ToolBar onChangeHandler={onChangeHandler} input={input} />
            <TopicDropDown />
          </div>
        </div>
        <Switch>
          <Route path='/topics' component={Topics} />
          <Route path='/posts'>
           <Posts input={input} />
          </Route>
          <Route path='/comments' component={Comments} />
        </Switch>
        
        <Trending />
      </div>
    </Router>
  );
}

export default App;