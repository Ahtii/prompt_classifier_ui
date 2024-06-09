import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="chat-history">
        <p className="canvas-title"> Customer Chat </p>
        <div className="canvas-body">
          <div className="canvas-text">
            <div className="canvas-placeholder">
              <p className="canvas-placeholder-title"> Want to classify your queries? </p>
              <hr/>
              <br/>
              <p className="canvas-placeholder-body">
                Enter your question or concern here, and let me assist you by categorizing it for a faster resolution.
              </p>
            </div>
          </div>
          <div className="canvas-action">
            <input placeholder="Enter your prompt here"></input>
            <button> Send </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
