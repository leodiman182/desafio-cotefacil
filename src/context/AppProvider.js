import React, { useState } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [counter, setCounter] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [wasTimerUsed, setWasTimerUsed] = useState(false);
  const [isEven, setIsEven] = useState(false);
  const [error, setError] = useState(false);
  
  const context = {
    counter, setCounter,
    wasTimerUsed, setWasTimerUsed,
    timerOn, setTimerOn,
    isEven, setIsEven,
    error, setError
  }

  return (
    <AppContext.Provider value={context}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider;