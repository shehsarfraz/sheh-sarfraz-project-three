import './App.css';


function App() {

  fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
  .then( (response) => {
    return response.json()
  })
  .then( (jsonResult) => {
    console.log('It worked', jsonResult)
  })


  // fetch('www.thecocktaildb.com/api/json/v1/1/random.php')
  // .then(function(response){
  //   return response.json();
  // })
  // .then(function(jsonResult){
  //   console.log('It worked!', jsonResult);
  // })


// Set up fetch request 
// Pull random recipe's name, ingredients, instructions and picture 
// Display above within it's own component and render that component within app
// Create function using terniaries to allow user to clear current drink or show recipe 


  return (
    <div className="App">

    </div>
  );
}

export default App;
