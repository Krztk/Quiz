import React from 'react';
import './App.scss';
import { Router } from '@reach/router';
import Home from './screens/Home';
import Quiz from './screens/Quiz';

function App() {
  return (
    <div className="wrapperWithBackground">
      <Router>
        <Home path="/" />
        <Quiz path="/quiz" />
      </Router>
    </div>
  );
}

export default App;
