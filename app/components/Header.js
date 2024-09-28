// app/components/Header.js

import Link from 'next/link';

export default function Header() {
  return (
    <header style={headerStyle}>
      <h1>Student Portal</h1>
      <nav>
        <ul style={navListStyle}>
          <li style={navItemStyle}><Link href="/">Home</Link></li>
          <li style={navItemStyle}><Link href="/appointments">Appointments</Link></li>
          <li style={navItemStyle}><Link href="/profile">Profile</Link></li>
          <li style={navItemStyle}><Link href="/logout">Logout</Link></li>
        </ul>
      </nav>
    </header>
  );
}

const headerStyle = {
  backgroundColor: '#333',
  color: 'white',
  padding: '1rem',
  textAlign: 'center',
};

const navListStyle = {
  listStyleType: 'none',
  padding: 0,
  margin: '1rem 0 0 0',
  display: 'flex',
  justifyContent: 'center',
};

const navItemStyle = {
  margin: '0 15px',
};
