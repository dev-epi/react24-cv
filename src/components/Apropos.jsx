import React from "react";

export default function Apropos(props) {
  return (
    <div className="section">
      <h2>{props.title}</h2>
      <p>{props.about}</p>
    </div>
  );
}
