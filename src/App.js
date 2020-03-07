import React from 'react';
import logo from './logo.svg';
import './App.css';

class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagramm</li>
          <li>Whatsapp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Ok?
        </p>
        <ShoppingList />
      </header>
    </div>
  );
}

export default App;
