import React from 'react';
import ProblemTable from './components/ProblemTable';
import Login from './components/Login';
import "./App.css"

function App() {

  return (
    <div className='app'>
      <h1>DSA <span style={{ color: "#003399" }}>Layer</span></h1>
      <Login />
      {/* <ProblemTable /> */}
    </div>
  )
}

export default App
