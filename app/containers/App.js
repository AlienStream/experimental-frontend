import React from 'react';

import Controls from '../components/controls'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import Topbar from '../components/topbar'

require("../styles/app.scss");

class App extends React.Component {  
  render() {
    return (
      <div className="app">
        <Topbar />
        <div className="app__container ">
          <Navbar />
          <div className="app__content app_content--with-sidebar">
            {this.props.children}
          </div>
          <Sidebar />
          <Controls />
        </div>
      </div>
    );
  }
}

export default App;