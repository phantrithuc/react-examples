import React, { useContext } from 'react';
import { useNavigator } from './Navigation';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';

const Dashboard = () => {
  const { step } = useNavigator(2)
  return (
  <div>
    {step === 1 && <FirstStep/>}
    {step === 2 && <SecondStep/>}
  </div>)
}

export default Dashboard;