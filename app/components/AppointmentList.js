// app/components/AppointmentList.js

export default function AppointmentList({ appointments, onEdit, onDelete }) {
    if (appointments.length === 0) {
      return <p>No appointments scheduled.</p>;
    }
  
    return (
      <table style={tableStyle}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appt) => (
            <tr key={appt.id}>
              <td>{appt.date}</td>
              <td>{appt.time}</td>
              <td>{appt.description}</td>
              <td>
                <button onClick={() => onEdit(appt)} style={editButtonStyle}>Edit</button>
                <button onClick={() => onDelete(appt.id)} style={deleteButtonStyle}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  
  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
  };
  
  const editButtonStyle = {
    padding: '5px 10px',
    marginRight: '5px',
    backgroundColor: '#ffc107',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
  };
  
  const deleteButtonStyle = {
    padding: '5px 10px',
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
  };
  