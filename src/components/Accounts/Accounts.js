import React from "react";
import "./Accounts.css";

const Accounts = ({ employeeSalary }) => {
  let salary = 0;
  let current = 500000;

  for (const num of employeeSalary) {
    if (current) {
      salary = salary + Number(num);
      current = current - Number(num);
    }
  }

  return (
    <div className="account__card">
      <h1>Company Accounts</h1>
      <p> Company Revenue : 500000 BDT</p>
      <p>
        Paid Employee:{" "}
        {current ? employeeSalary.length : "You Don't have Money"}
      </p>
      <p>Total Paid Amount: {salary} BDT</p>
      <p>Current Balance : {current} BDT</p>
    </div>
  );
};

export default Accounts;
