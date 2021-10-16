import React from "react";
import "./SingleEmployee.css";

const SingleEmployee = ({ employee: { name, photo, designation, salary } }) => {
  return (
    <div className="employee__card">
      <img src={photo} alt={name} />
      <h3>{name}</h3>
      <p>{designation}</p>
      <h5>Salary: {salary}</h5>
      <button className="pay__button">Pay Now</button>
    </div>
  );
};

export default SingleEmployee;
