import React from "react";

export const Card = (props) => {
  return <div {...props}>{props.children}</div>;
};

export const Image = (props) => {
  return <img {...props} alt={props.alt} />;
};

export const X = (props) => {
  return <span {...props}>X</span>;
};
