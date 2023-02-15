import React, {useState} from 'react';
import { db } from './db';
import "../css/style.css"

export const Wheel = () => {
  const [email, setEmail] = useState("")
  const [vin, setVin] = useState("")
  const [prize, setPrize] = useState("")

  const addCustomer = async () => {
    try {
      const id = await db.customers.add({
        email,
        vin
      })
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div className='container'>
        <div className='content'>
            <div className='wheel'>
                <img src={require('../assets/wheel-0223.png')}/>
            </div>
            <div className='content-wrapper'>
                <div className='prize'>
                  <h1>BIMMERTECH <br/> <span className='lottery'>LOTTERY</span></h1>
                  <p>Try your luck!</p>
                </div>
                <div className='inputs'>
                  <label htmlFor="email-input">Email:</label>
                  <input id='email-input' type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                  <label htmlFor="email-input">VIN:</label>
                  <input id='vin-input' type="text" value={vin} onChange={e => setVin(e.target.value)}/>
                </div>
                <button className='spin-btn' onClick={addCustomer}>Spin</button>
            </div>
        </div>
    </div>
  )
}