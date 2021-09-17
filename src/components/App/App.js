import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import GuestList from '../GuestList/GuestList.js';
import DinnerSupplies from '../DinnerSupplies/DinnerSupplies.js';
import GuestForm from '../GuestForm/GuestForm.js';

function App() {
  let [guestList, setGuestList] = useState([]);
  

  //On load, get guests
  useEffect(() => {
    getGuests()
  }, [])

  const getGuests = () => {
    axios.get('/guests')
      .then(response => {
        setGuestList(response.data)
      })
      .catch(err => {
        alert('error getting guests');
        console.log(err);
      })
  }


  const addGuest = (newGuestName, newGuestMeal) => {
    axios.post('/guests', { name: newGuestName, kidsMeal: newGuestMeal })
      .then(response => {
        getGuests();
      })
      .catch(err => {
        alert('Error Adding Guest');
        console.log(err);
      })
  };


  

  return (
    <div className="App">
      <Header />
      <h2>Party Leader</h2>
      {guestList[0] && <h3>{guestList[0].name}</h3>}
      <GuestForm addGuest={addGuest} />
      <GuestList guestList={guestList}/> {/** in brackets needs to match useState */}
      {/** before brackets needs to match whats in GuestList.js */}
      <DinnerSupplies guestList={guestList}/>
      <Footer />
    </div>
  );
}

export default App;
