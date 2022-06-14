import React from 'react';
import './App.css';
import Product from './components/Product';
import Last from './components/Last';
import Collection from './components/Collection';
import User from './components/User';
import Product2 from './components/ProductTEST';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <main>
          {/* <Product /> */}
          <Product2 />
          <div className='low-container'>
            <User />
            <Collection />
            <Last />
          </div>
        </main>
      </header>
    </div>
  );
}

export default App;
