import React from 'react';
import './App.css';

function Card({ id, name, destination, age }) {
  return (
    <div className="card">
      <h2>Card {id}</h2>
      <p>Name: {name}</p>
      <p>Destination: {destination}</p>
      <p>Age: {age}</p>
    </div>
  );
}

function App() {
  const cardsData = [
    { id: 1, name: 'John Doe', destination: 'Paris', age: 30 },
    { id: 2, name: 'Jane Doe', destination: 'London', age: 25 },
    { id: 3, name: 'Alice', destination: 'New York', age: 35 },
    { id: 4, name: 'Bob', destination: 'Tokyo', age: 40 },
    { id: 5, name: 'Eve', destination: 'Sydney', age: 45 },
    { id: 6, name: 'Charlie', destination: 'Berlin', age: 20 },
  ];

  return (
    <div className="App">
      <h1>Cards Application</h1>
      <div className="card-container">
        {cardsData.map(card => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
}

export default App;
