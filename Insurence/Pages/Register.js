import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Register() {
  const [name, setName] = useState('');
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobileNumber] = useState('');
  const [policy_type, setPolicyType] = useState('');
  const [payment_type, setPaymentType] = useState('');
  const [renew_type, setPolicyRenewType] = useState('');
  const [status,setStatus] = useState(false);
  
  const handleChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const data = {
      name: name,
      vehicleNumber: `${localStorage.getItem('name')}`,
      dob: dob,
      age: age,
      email: email,
      mobile: mobile,
      policy_type: policy_type,
      payment_type: payment_type,
      renew_type: renew_type,
      amount:payment_type
    };

let token = localStorage.getItem('token')
  
  console.log("token value:",token)

    await axios.post('http://localhost:8080/api/v1/demo/post', data, {
      headers: {
        "Authorization": `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
    })
    .then((response) => {
      console.log('Success:', response.data);
      setStatus(true)
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  return (
    <div>
      <div style={{ paddingTop: '5em', justifyContent: 'center', alignItems: 'center', display: 'flex', width: '100vw', height: '100vh', flexDirection: 'column' }}>
        <form onSubmit={handleSubmit}>
          <h1 style={{ fontFamily: 'cursive', color: 'gray', textAlign: 'center' }}>Register Your Insurance.!</h1>
          {status &&(
          <h3 style={{textAlign:'center', color:"green"}}>Your Registration Successfully completed...!</h3>
          )}
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: '100vw' }}>
            <div style={{ display: 'flex', flexDirection: 'column', marginTop: '4em' }}>
              <input value={name} onChange={(e) => handleChange(e, setName)} required placeholder="Enter Your Name" style={{ width: '25em', marginTop: '1.5em', paddingLeft: '2em', borderRadius: 6, fontSize: '0.85em', fontFamily: 'cursive', height: '3em' }} />
              <input value={vehicleNumber} onChange={(e) => handleChange(e, setVehicleNumber)} required placeholder="Enter Your Vehicle Number" style={{ width: '25em', marginTop: '1.5em', paddingLeft: '2em', borderRadius: 6, fontSize: '0.85em', fontFamily: 'cursive', height: '3em' }} />

              <input value={dob} onChange={(e) => handleChange(e, setDob)} required placeholder="Enter Your Date of Birth" style={{ width: '25em', marginTop: '1.5em', paddingLeft: '2em', borderRadius: 6, fontSize: '0.85em', fontFamily: 'cursive', height: '3em' }} />
              <input value={age} onChange={(e) => handleChange(e, setAge)} required placeholder="Enter Your Age" style={{ width: '25em', marginTop: '1.5em', paddingLeft: '2em', borderRadius: 6, fontSize: '0.85em', fontFamily: 'cursive', height: '3em' }} />

              <label style={{ marginTop: '1em' }}>Select Your Photo</label> 
                {/* <input required type="file" style={{ width: '25em', marginTop: '1.5em', paddingLeft: '2em', borderRadius: 6, fontSize: '0.85em', fontFamily: 'cursive', height: '3em' }} />  */}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', marginTop: '4em' }}>
              <input value={email} onChange={(e) => handleChange(e, setEmail)} required placeholder="Enter Your Email Id" style={{ width: '25em', marginTop: '1.5em', paddingLeft: '2em', borderRadius: 6, fontSize: '0.85em', fontFamily: 'cursive', height: '3em' }} />

              <input value={mobile} onChange={(e) => handleChange(e, setMobileNumber)} required placeholder="Enter Your Mobile Number" style={{ width: '25em', marginTop: '1.5em', paddingLeft: '2em', borderRadius: 6, fontSize: '0.85em', fontFamily: 'cursive', height: '3em' }} />

              <select value={policy_type} onChange={(e) => handleChange(e, setPolicyType)} style={{ width: '27em', marginTop: '1.5em', paddingLeft: '2em', borderRadius: 6, fontSize: '0.85em', fontFamily: 'cursive', height: '3em' }}>
                <option value="">Select Your Policy Type</option>
                <option value="Car Insurance">Car Insurance</option>
                <option value="Bike Insurance">Bike Insurance</option>
                <option value="Bus Insurance">Bus Insurance</option>
              </select>

              <select value={payment_type} onChange={(e) => handleChange(e, setPaymentType)} style={{ width: '27em', marginTop: '1.5em', paddingLeft: '2em', borderRadius: 6, fontSize: '0.85em', fontFamily: 'cursive', height: '3em' }}>
                <option value="">Select Your Payment Type</option>
                <option value="10000">10,000/-</option>
                <option value="23000">23,000/-</option>
                <option value="50000">50,000/-</option>
              </select>

              <select value={renew_type} onChange={(e) => handleChange(e, setPolicyRenewType)} style={{ width: '27em', marginTop: '1.5em', paddingLeft: '2em', borderRadius: 6, fontSize: '0.85em', fontFamily: 'cursive', height: '3em' }}>
                <option value="">Select Policy Renew Type</option>
                <option value="Yearly Renewal">Yearly Renewal</option>
                <option value="Monthly Insurance">Monthly Insurance</option>
                <option value="Every 3 Months">Every 3 Months</option>
              </select>

              <label style={{ marginTop: '1em' }}>Select Your Aadhar Proof</label>
              {/* <input required type="file" placeholder="Choose Your Image" style={{ width: '25em', marginTop: '1em', paddingLeft: '2em', borderRadius: 6, fontSize: '0.85em', fontFamily: 'cursive', height: '3em' }} /> */}
            </div>
          </div>

          <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', width: '100vw' }}>
            <div style={{ cursor: 'pointer', backgroundColor: 'lightblue', width: '15em', marginTop: '3.5em', borderRadius: 6, fontSize: '0.85em', fontFamily: 'cursive', height: '3em', border: '1px solid gray', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
              <button style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }} type="submit">
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

