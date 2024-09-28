// lib/api.js

let appointments = [
    {
      id: 1,
      date: '2024-10-05',
      time: '10:00',
      description: 'Math Tutoring',
    },
    {
      id: 2,
      date: '2024-10-06',
      time: '14:00',
      description: 'Career Counseling',
    },
  ];
  
  // Simulate network delay
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  
  export const fetchAppointments = async () => {
    await delay(500); // simulate delay
    return appointments;
  };
  
  export const createAppointment = async (appointment) => {
    await delay(500);
    const newAppointment = { id: Date.now(), ...appointment };
    appointments.push(newAppointment);
    return newAppointment;
  };
  
  export const updateAppointment = async (id, updatedData) => {
    await delay(500);
    appointments = appointments.map((appt) => appt.id === id ? { ...appt, ...updatedData } : appt);
    return appointments.find((appt) => appt.id === id);
  };
  
  export const deleteAppointment = async (id) => {
    await delay(500);
    appointments = appointments.filter((appt) => appt.id !== id);
    return true;
  };
  