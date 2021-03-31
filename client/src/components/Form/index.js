import React from 'react';

export const FormContainer = (props) => {
  return <form {...props}>{props.children}</form>;
};

export const FormInput = (props) => {
  return <input {...props} />;
};

export const FormLabel = (props) => {
  return <label {...props}>{props.children}</label>;
};

export const Button = (props) => {
  return <button {...props}>{props.children}</button>;
};
