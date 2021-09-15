import React, { useState } from 'react';
import Posts from './Features/posts/Posts';
import Trending from './Features/trending/Trending';
import Topics from './Features/topics/Topics';
import Home from './Components/home/Home';
import TopicPage from './Features/topicPage/TopicPage';
import './App.css';
import './index.css';
import SearchBar from './Components/searchbar/SearchBar';
import TopicDropDown from './Components/dropDownMenus/topicDropDown/TopicDropDown';
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
            <img id='reddit-text' src={logoText} alt='reddit text' />
            <h1>Relaxed</h1>
          </div>
          <div className='searches'>
            <SearchBar onChangeHandler={onChangeHandler} input={input} />
            <TopicDropDown />
          </div>
        </div>
        <div className='main'>
          
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/topics' component={Topics} />
            <Route path='/posts'>
            <Posts input={input} />
            </Route>
            <Route path='/topicPage/:name' component={TopicPage} />
            <Route path='/comments' component={Comments} />
          </Switch>
          <Trending />
        </div>
      </div>
    </Router>
  );
}

export default App;