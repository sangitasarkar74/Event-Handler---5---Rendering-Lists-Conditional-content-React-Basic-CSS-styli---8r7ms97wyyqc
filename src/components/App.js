import React from 'react'
import '../styles/App.css';
const App = () => {


  return (
    <div id="main">
      <form>
        <label htmlFor='name'>Name</label>
        <input id="name" type={"text"} />

        <br />
        <br />
        <button type='submit' onClick={() => {
          console.log("form submitted");
        }}>Submit</button>
      </form>
    </div>
  )
}

export default App;
