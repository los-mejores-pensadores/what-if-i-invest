import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ProcessSteps from './ProcessSteps'
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Moneiz</h1>
          </header>
          <ProcessSteps />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
