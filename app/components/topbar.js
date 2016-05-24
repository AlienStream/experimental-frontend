import React from 'react';

import Controls from '../components/controls'

class Topbar extends React.Component {
  render() {
    return (
      <header className="header header-md navbar navbar-fixed-top-xs">
	      <div className="navbar-header aside bg-info">
	        <a href="index.html" className="navbar-brand text-lt">
	          <i className="icon-earphones"></i>
	          <span className="hidden-nav-xs m-l-sm">AlienStream</span>
	        </a>
	      </div>
		  <Controls />
	  </header>
    );
  }
}

export default Topbar;