import React from 'react';

export const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className='footer'>
      <p>&copy; {date} niles87</p>
      <a href='https://github.com/niles87/file-loader'>github</a>
    </div>
  );
};
