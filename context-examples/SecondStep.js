import React, { useContext } from 'react';
import { useNavigator } from './Navigation';
const SecondStep = () => {
  const { moveBack } = useNavigator()
  return (
  <div>
    Step 2
    <button onClick={()=> moveBack()}>Back</button>
  </div>)
}

export default SecondStep;