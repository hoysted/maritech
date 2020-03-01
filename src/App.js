import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './components/navigation/navigation';
import { NavItems } from './config/config';

// import components for nav
import TreeTraversal from './components/treeTraversal/treeTraversal';
import ReactComponent from './components/react/react';
import DomStyling from './components/domStyling/domStyling';
import CssLayout from './components/cssLayout/cssLayout';

function App() {
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
