// app/components/Modal.js

export default function Modal({ children, onClose }) {
    return (
      <div style={overlayStyle}>
        <div style={modalStyle}>
          <span onClick={onClose} style={closeButtonStyle}>&times;</span>
          {children}
        </div>
      </div>
    );
  }
  
  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  
  const modalStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    position: 'relative',
    width: '400px',
    maxWidth: '90%',
  };
  
  const closeButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '15px',
    fontSize: '20px',
    cursor: 'pointer',
  };
  