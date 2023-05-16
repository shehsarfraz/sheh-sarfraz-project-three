import React from 'react';
import RandomDrink from './RandomDrink';

const App = () => {
  return (
    <div className="container2">
      <h1>🍹 Random Drink Generator 🍸</h1>
      <div className="container1">
      <RandomDrink />
      <p>Click the button above to get a random alcoholic beverage.</p>
      </div>
    </div>
  );
};

export default App;

