import React from "react";

export default function Experiences(props) {
  return (
    <div className="section">
      <h2>
        Expériences <br />
        <span className="text-blue">professionelles</span>
      </h2>
      {props.items.map((experience, index) => (
        <>
          <p>
            <strong>
              2015 <i className="fas fa-long-arrow-alt-right"></i> 2021
            </strong>
            <br />
            {experience.title} <em>{experience.company}</em>
          </p>
          <ul>
            <li>{experience.description}</li>
          </ul>
        </>
      ))}
    </div>
  );
}
Experiences.defaultProps = {
  items: [],
};
