import React, { useContext, useState, useEffect } from 'react';
export const NavigatorContext = React.createContext();
export const NavigatorProvider = ({ children }) => {
  const [step, setStep] = useState(null);
  return (
    <NavigatorContext.Provider value={{step, setStep}}>
      {children}
    </NavigatorContext.Provider>
  )
}
export const useNavigator = (initialStep) => {
  const { step, setStep } = useContext(NavigatorContext);
  useEffect(()=>{
    if (initialStep) setStep(initialStep);
  },[initialStep]);
  const moveNext = () => setStep(step + 1);
  const moveBack = () => setStep(step - 1);
  return { step, moveNext, moveBack };
}
