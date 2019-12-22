import React, { useContext } from 'react';
import { useNavigator } from './Navigation';
const FirstStep = () => {
  const { moveNext } = useNavigator()
  return (
  <div>
    Step 1
    <button onClick={()=> moveNext()}>Next</button>
  </div>)
}

export default FirstStep;