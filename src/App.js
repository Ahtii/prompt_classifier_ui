import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'

function App() {
  const [show, setShow] = useState(true);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const messagesElement = document.querySelector('.messages');

    setShow(inputValue === '' && messagesElement.innerHTML === '');
  };

  return (
    <div className="App">
      <div className="chat-history">
        <p className="canvas-title"> Customer Chat </p>
        <div className="canvas-body">
          <div className="canvas-text">
            <div className="canvas-placeholder" style={{ display: show ? 'block' : 'none' }}>
              <p className="canvas-placeholder-title"> Want to classify your queries? </p>
              <hr/>
              <br/>
              <p className="canvas-placeholder-body">
                Enter your question or concern here, and let me assist you by categorizing it for a faster resolution.
              </p>
            </div>
            <div className="messages"></div>
          </div>
          <div className="canvas-action">
            <input placeholder="Enter your prompt here" onChange={handleInputChange}></input>
            <button> Send </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
