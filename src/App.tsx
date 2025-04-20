import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from './app/hooks';
import { incremented, amountAdded, amountDecremented, amountReset } from './features/counter/counter-slice';
import { useFetchBreedsQuery } from './features/dogs/dogs-api-slice';
import './App.css'

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const [numDogs, setNumDogs] = useState(10);
  const { data = [], isFetching } = useFetchBreedsQuery(numDogs);

  function handleClick() {
    dispatch(amountAdded(3));
  }

  function handleIncremented(){
    dispatch(incremented());
  }

  function handleDecremented(){
    dispatch(amountDecremented());
  }

  function handleReset(){
    dispatch(amountReset());
  }

  return (
    <div className="App">
      <header className="App-header">
        
        <div id="counter-component">
          <h1>{count}</h1>

          <button onClick={handleReset}>
            count 0
          </button>

          <button onClick={handleIncremented}>
            count +
          </button>

          <button onClick={handleDecremented}>
            count -
          </button>

          <button onClick={handleClick}>
            count + 3
          </button>
        </div>
        
        {isFetching ? 
          <p>LoADING...</p> 
          : 
          <div id="dogs-component" className="dogsApp">
            <div>
              <h1>Dogs to fetch:</h1>
              <select value={numDogs} onChange={(e) => setNumDogs(Number(e.target.value))}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
              </select>
            </div>
            
            <div>
              <small>Number of dogs fetched: {data.length}</small>
              {data.map((breed) => (
                <div key={breed.id} className="wrapBreed">
                  <img src={breed.image.url} alt={breed.name} height={250} />
                  <p className="breedOverlay">{breed.name}</p>
                </div>
              ))}
            </div>
          </div>
        }
        
      </header>
    </div>
  )
}

export default App
