import React, {useState} from 'react'
import './Message.css'

const Message = () => {
  const [show, setShow] = useState(true);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const messagesElement = document.querySelector('.messages');

    setShow(inputValue === '' && messagesElement.innerHTML === '');
  };

  const getParagraphChild = (text) => {
    var paragraphElement = document.createElement("p");
    paragraphElement.appendChild(document.createTextNode(text))
    return paragraphElement
  }

   const handleSubmit = (event) => {
   const prompt = document.querySelector('input').value;

    var messages = document.querySelector('.messages');
    messages.appendChild(getParagraphChild(prompt))

    document.querySelector('.canvas-body .fa').style.display = "block";

    fetch('http://127.0.0.1:8000/category/', {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(prompt)
    })
    .then(response => response.json())
    .then(data => {
       document.querySelector('.canvas-body .fa').style.display = "none";
       messages.appendChild(getParagraphChild(data['category']))
    });
    };

    return (
        <div className="chat-history">
        <p className="canvas-title"> Customer Chat </p>
        <div className="canvas-body">
          <i className="fa fa-spinner fa-spin"></i>
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
            <button onClick={handleSubmit}> Send </button>
          </div>
        </div>
      </div>
    )
}

export default Message;
