"use client"; // Add this at the top to mark this component as a Client Component

import AppointmentList from '../components/AppointmentList';
import AppointmentForm from '../components/AppointmentForm';
import { useState, useEffect } from 'react';
import { fetchAppointments, createAppointment, updateAppointment, deleteAppointment } from '../../lib/api';
import Modal from '../components/Modal';

export default function AppointmentPage() {
  const [appointments, setAppointments] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentAppointment, setCurrentAppointment] = useState(null);

  useEffect(() => {
    loadAppointments();
  }, []);

  const loadAppointments = async () => {
    const data = await fetchAppointments();
    setAppointments(data);
  };

  const handleAdd = () => {
    setCurrentAppointment(null);
    setIsModalOpen(true);
  };

  const handleEdit = (appointment) => {
    setCurrentAppointment(appointment);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    await deleteAppointment(id);
    loadAppointments();
  };

  const handleFormSubmit = async (appointment) => {
    if (currentAppointment) {
      await updateAppointment(currentAppointment.id, appointment);
    } else {
      await createAppointment(appointment);
    }
    setIsModalOpen(false);
    loadAppointments();
  };

  return (
    <div>
      <h2>Appointment Management</h2>
      <button onClick={handleAdd}>Add New Appointment</button>
      <AppointmentList appointments={appointments} onEdit={handleEdit} onDelete={handleDelete} />
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <AppointmentForm onSubmit={handleFormSubmit} initialData={currentAppointment} />
        </Modal>
      )}
    </div>
  );
}
