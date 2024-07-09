import React, { useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Counters from './components/counters';

function App() {
  const [counters, setCounters] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ]);


  const handleIncrement = (counter) => {
    const newCounters = counters.map((c) => {
      if (c.id === counter.id) {
        return { ...c, value: c.value + 1 };
      }
      return c;
    });
    setCounters(newCounters);
  };

  const handleDelete = (counterId) => {
    const newCounters = counters.filter((c) => c.id !== counterId);
    setCounters(newCounters);
  };

  const handleReset = () => {
    const newCounters = counters.map((c) => ({ ...c, value: 0 }));
    setCounters(newCounters);
  };

  return (
    <React.Fragment>
      <Navbar totalCounters={counters.filter(c => c.value > 0).length}/>
      <main className='container'>
        <Counters 
          counters={counters} 
          onReset={handleReset} 
          onDelete={handleDelete} 
          onIncrement={handleIncrement} 
        />
      </main>
    </React.Fragment>
  );
}

export default App;
