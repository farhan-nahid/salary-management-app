import React, { useEffect, useState } from "react";
import Accounts from "../Accounts/Accounts";
import SingleEmployee from "../SingleEmployee/SingleEmployee";
import "./AppContainer.css";

const AppContainer = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("./employee.json")
      .then((res) => res.json())
      .then((data) => setEmployees(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <section className="app__container container">
      <div className="employees__container">
        {employees.map((employee, idx) => (
          <SingleEmployee key={idx} employee={employee} />
        ))}
      </div>
      <div>
        <Accounts />
      </div>
    </section>
  );
};

export default AppContainer;
