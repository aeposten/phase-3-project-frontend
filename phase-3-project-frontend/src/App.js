import './App.css';
import Loanlist from './components/Loanlist';
import PaymentCalculator from './components/PaymentCalculator';

import LandingPage from './components/LandingPage'
import { useEffect, useState } from 'react';


import Functionlist from './components/Functionlist';
import Profile from './components/Profile';

function App() {
  const [people, setPeople] = useState([])
  const [person, setPerson] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/people')
    .then(r => r.json())
    .then(data=>setPeople(data))
    return () => {
      "hey"
    }
  }, []);

  function setPersonState(){

  }
  return (
    <div className="App">

    <LandingPage setPersonState={setPersonState} people={people}/>

      <Functionlist/>
      <Profile people={people}/>
      <PaymentCalculator />
      <Loanlist/>
    </div>
  );
}

export default App;
