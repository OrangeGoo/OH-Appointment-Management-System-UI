// app/components/AppointmentForm.js

import { useState } from 'react';

export default function AppointmentForm({ onSubmit, initialData }) {
  const [date, setDate] = useState(initialData ? initialData.date : '');
  const [time, setTime] = useState(initialData ? initialData.time : '');
  const [description, setDescription] = useState(initialData ? initialData.description : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ date, time, description });
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h3>{initialData ? 'Edit Appointment' : 'Add New Appointment'}</h3>
      <label style={labelStyle}>Date:</label>
      <input 
        type="date" 
        value={date} 
        onChange={(e) => setDate(e.target.value)} 
        required 
        style={inputStyle}
      />

      <label style={labelStyle}>Time:</label>
      <input 
        type="time" 
        value={time} 
        onChange={(e) => setTime(e.target.value)} 
        required 
        style={inputStyle}
      />

      <label style={labelStyle}>Description:</label>
      <input 
        type="text" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        required 
        style={inputStyle}
      />

      <button type="submit" style={submitButtonStyle}>
        {initialData ? 'Update' : 'Create'}
      </button>
    </form>
  );
}

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const labelStyle = {
  margin: '10px 0 5px',
};

const inputStyle = {
  padding: '8px',
  borderRadius: '4px',
  border: '1px solid #ccc',
};

const submitButtonStyle = {
  padding: '10px',
  marginTop: '20px',
  backgroundColor: '#28a745',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
};
