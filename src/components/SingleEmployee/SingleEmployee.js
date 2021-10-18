import { faCheckCircle, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./SingleEmployee.css";

const SingleEmployee = ({
  employee: { name, photo, designation, salary },
  handleClick,
}) => {
  const [isDisable, setIsDisable] = useState(false);

  let button = (
    <button
      className="pay__button"
      onClick={() => {
        handleClick(salary);
        setIsDisable(true);
      }}
    >
      <span>
        <FontAwesomeIcon icon={faMoneyBill} />
      </span>
      Pay Now
    </button>
  );

  if (isDisable) {
    button = (
      <button className="paid__button" disabled={isDisable}>
        <span>
          <FontAwesomeIcon icon={faCheckCircle} />
        </span>
        Paid
      </button>
    );
  }

  return (
    <div className="employee__card">
      <img src={photo} alt={name} />
      <h3>{name}</h3>
      <p>{designation}</p>
      <h5>Salary: {salary}</h5>
      {button}
    </div>
  );
};

export default SingleEmployee;
