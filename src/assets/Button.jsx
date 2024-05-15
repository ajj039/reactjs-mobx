import React from 'react';

const Button = ({ children, onClick, type }) => {
  return (
    <div>
      <button onClick={onClick} type={type}>
        {children}
      </button>
    </div>
  );
};

export default Button;
