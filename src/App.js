import './App.css';
import './index.css';
import ToolBar from './Components/toolbar/ToolBar';
import DropDownCountry from './Components/dropDownMenus/countryDropDown/Country';
import TopicDropDown from './Components/dropDownMenus/topicDropDown/Topic'
import React, { Component } from 'react';


 

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