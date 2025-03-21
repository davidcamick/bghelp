import { useState } from 'react'
import './App.css'

function App() {
  const [lowActive, setLowActive] = useState(false);
  
  const handleLowClick = () => {
    setLowActive(true);
  };
  
  return (
    <div className="app-container">
      <div className={`top-box rounded-2xl shadow-lg ${lowActive ? 'top-exit' : ''}`}>
        <div className="container-content">
          <div className="main-text">High</div>
          <div className="sub-text">180+</div>
        </div>
      </div>
      
      <div className={`overlay-text ${lowActive ? 'text-hidden' : ''}`}>
        I am...
      </div>
      
      <div 
        className={`bottom-box rounded-2xl shadow-lg ${lowActive ? 'bottom-expanded' : ''}`}
        onClick={!lowActive ? handleLowClick : undefined}
      >
        <div className="container-content">
          <div className="main-text">Low</div>
          <div className="sub-text">80-</div>
        </div>
        <div className={`blood-sugar-prompt ${lowActive ? 'show-prompt' : ''}`}>
          <div className="prompt-text">What is your blood sugar?</div>
          <input 
            type="number" 
            className="number-input"
            min="0"
            max="800"
            placeholder="000"
          />
          <button className="next-button">
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
