import React, { useContext, useState } from 'react';
const NavigatorContext = React.createContext();
export const NavigatorProvider = ({ children }) => {
  const [step, setStep] = useState(1);
  return (
    <NavigatorContext.Provider value={{step}}>
      {children}
    </NavigatorContext.Provider>
  )
}