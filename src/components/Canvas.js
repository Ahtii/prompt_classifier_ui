import React, { Component } from 'react'
import './Canvas.css'

class Canvas extends Component {
    render() {
        return (
            <div className="canvas">
                <p className="canvas-title"> Prompt Classifier </p>
                <div className="canvas-body">
                    <div className="canvas-placeholder">
                        <p className="canvas-placeholder-title">
                            Want to classify your queries?
                        </p>
                        <hr />
                        <br />
                        <p className="canvas-placeholder-body">
                            Enter your question or concern here, and let me assist you by categorizing it
                            for a faster resolution.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Canvas
