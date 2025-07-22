import React from 'react';

const signupButton = {
  width: '200px',
  margin: '0 auto',
  fontWeight: 500,
  backgroundColor: '#387ed1',
  color: '#fff',
  border: '1px solid rgba(0, 0, 0, 0)',
  borderRadius: '3px',
  fontSize: '1.2em',
};


function Button({ text }) {
    return (
        <button className='p-2 btn btn-primary' style={signupButton}>{text}</button>
    );
}

export default Button;