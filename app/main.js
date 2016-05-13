import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>
        {this.props.children}
      </div>
    )
  }
})

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>

	    </Route>
	</Router>, 
document.getElementById('app')) 
