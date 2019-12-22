import React from 'react';
const Dashboard = ({ step }) => {
  return (
  <div>
    {step === 1 && <div> First Step {step}</div>}
    {step === 2 && <div> Second Step {step}</div>}
  </div>)
}

export default Dashboard;