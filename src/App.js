<<<<<<< HEAD
import Posts from './Features/posts/Posts';
import Trending from './Features/trending/Trending';
import { Topics } from './Features/topics/Topics';
=======
>>>>>>> components
import './App.css';
import './index.css';
import ToolBar from './Components/toolbar/ToolBar';
import DropDownCountry from './Components/dropDownMenus/countryDropDown/Country';
import TopicDropDown from './Components/dropDownMenus/topicDropDown/Topic'
import React, { Component } from 'react';

<<<<<<< HEAD

function App() {
  return (
    <div className="App">
      <Topics />
      <Posts />
      <Trending />
    </div>
  );
}
=======
>>>>>>> components

 

class App extends React.Component {

  
  
  render() { 
    return (
      <React.Fragment>
        <ToolBar />
        <DropDownCountry />
        <TopicDropDown />
      </React.Fragment>
    );
}
}
 
export default App;