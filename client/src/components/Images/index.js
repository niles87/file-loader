import React from "react";

export const Card = (props) => {
  return <div {...props}>{props.children}</div>;
};

export const Image = (props) => {
  return <img {...props} />;
};

export const X = (props) => {
  return <button {...props}>X</button>;
};
