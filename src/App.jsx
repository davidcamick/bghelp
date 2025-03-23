import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'

function App() {
  const [activeState, setActiveState] = useState(null);
  const [highBloodSugar, setHighBloodSugar] = useState('');
  const [lowBloodSugar, setLowBloodSugar] = useState('');
  const navigate = useNavigate();
  
  const handleBoxClick = (type) => {
    setActiveState(type);
  };

  const handleNext = () => {
    const currentValue = activeState === 'high' ? highBloodSugar : lowBloodSugar;
    if (!currentValue) return;
    
    const logs = JSON.parse(localStorage.getItem('bloodSugarLogs') || '[]');
    logs.push({
      value: currentValue,
      type: activeState,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem('bloodSugarLogs', JSON.stringify(logs));
    
    navigate(activeState === 'high' ? '/highevent' : '/lowevent');
  };
  
  return (
    <div className="app-container">
      <div 
        className={`top-box rounded-2xl shadow-lg ${activeState === 'high' ? 'top-expanded' : activeState === 'low' ? 'top-exit' : ''}`}
        onClick={!activeState ? () => handleBoxClick('high') : undefined}
      >
        <div className="container-content">
          <div className="main-text">High</div>
          <div className="sub-text">180+</div>
        </div>
        <div className={`blood-sugar-prompt ${activeState === 'high' ? 'show-prompt' : ''}`}>
          <div className="prompt-text">What is your blood sugar?</div>
          <input 
            type="number" 
            className="number-input"
            min="0"
            max="800"
            placeholder="000"
            value={highBloodSugar}
            onChange={(e) => {
              e.stopPropagation();
              setHighBloodSugar(e.target.value);
            }}
            onClick={(e) => e.stopPropagation()}
          />
          <button 
            className="next-button" 
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
          >
            Next
          </button>
        </div>
      </div>
      
      <div className={`overlay-text ${activeState ? 'text-hidden' : ''}`}>
        I am...
      </div>
      
      <div 
        className={`bottom-box rounded-2xl shadow-lg ${activeState === 'low' ? 'bottom-expanded' : activeState === 'high' ? 'bottom-exit' : ''}`}
        onClick={!activeState ? () => handleBoxClick('low') : undefined}
      >
        <div className="container-content">
          <div className="main-text">Low</div>
          <div className="sub-text">80-</div>
        </div>
        <div className={`blood-sugar-prompt ${activeState === 'low' ? 'show-prompt' : ''}`}>
          <div className="prompt-text">What is your blood sugar?</div>
          <input 
            type="number" 
            className="number-input"
            min="0"
            max="800"
            placeholder="000"
            value={lowBloodSugar}
            onChange={(e) => {
              e.stopPropagation();
              setLowBloodSugar(e.target.value);
            }}
            onClick={(e) => e.stopPropagation()}
          />
          <button 
            className="next-button" 
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
