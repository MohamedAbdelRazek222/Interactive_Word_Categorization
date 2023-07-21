// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import PracticeScreen from './components/PracticeScreen';
import RankScreen from './components/RankScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<PracticeScreen />} />
        <Route exact path="/rank" element={<RankScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
