import React, { useEffect, useState } from "react";
import Accounts from "../Accounts/Accounts";
import SingleEmployee from "../SingleEmployee/SingleEmployee";
import "./AppContainer.css";

const AppContainer = () => {
  const [employees, setEmployees] = useState([]);
  const [employeeSalary, setEmployeeSalary] = useState([]);

  useEffect(() => {
    fetch("./employee.json")
      .then((res) => res.json())
      .then((data) => setEmployees(data))
      .catch((err) => console.log(err));
  }, []);

  const handleClick = (salary) => {
    setEmployeeSalary([...employeeSalary, salary]);
  };

  return (
    <section className="app__container container">
      <div className="employees__container">
        {employees.map((employee, idx) => (
          <SingleEmployee
            key={idx}
            employee={employee}
            handleClick={handleClick}
          />
        ))}
      </div>
      <div>
        <Accounts employeeSalary={employeeSalary} />
      </div>
    </section>
  );
};

export default AppContainer;
