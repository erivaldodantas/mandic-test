import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PokerGameProvider from './providers/PokerGame';
import PokerContext from './contexts/PokerGame';
import PokerTable from './views/PokerTable';

function App() {
  return (
    <PokerGameProvider>
      <PokerTable />
    </PokerGameProvider>
  );
}

export default App;
