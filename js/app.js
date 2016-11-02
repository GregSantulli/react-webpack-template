import React from 'react';
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import ExampleComponent from './components/ExampleComponent.js'

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
        Hello World!
        <ExampleComponent/>
        <div>{ this.props.children }</div>
      </div>
    );
  }
}

var routes = (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
      </Route>
    </Router>
);

render(routes, document.getElementById('app'));

