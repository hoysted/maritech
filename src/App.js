import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './components/navigation/navigation';
import { NavItems } from './config/config';

//import components for nav
import TreeTraversal from './components/treeTraversal/treeTraversal';
import ReactComponent from './components/react/react';
import DomStyling from './components/domStyling/domStyling';
import CssLayout from './components/cssLayout/cssLayout';
import './App.css';

function App() {

  //tree
  //decide if array or obj - by features
    //1 can i flatten
    //2can i find a parent
    //3 given GUID can i insert into its children property

  //get date into func
  //before converting string into date - split it
  //split date delimited @ "-"
  //somehow take left numbers and right numbers
  //then go on to create date and dateValue for each and return whole object 
  //display whole object 


  return (
    <div className="App">
    <BrowserRouter>
      <Navigation navItems={NavItems}/>
      <Switch>
        <Route path="/" exact component={TreeTraversal} />
        <Route path="/react" component={ReactComponent} />
        <Route path="/dom-styling" component={DomStyling} />
        <Route path="/css-layout" component={CssLayout} />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
