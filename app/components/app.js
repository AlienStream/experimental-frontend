import React from 'react';

class App extends React.Component {  
  render() {
    return (
      <div>
        <h1>App Test<i className="fa fa-code"></i></h1>
        <ul>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default App;