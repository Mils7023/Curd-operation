import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

const AddEmployee = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [designation, setDesignation] = useState("");
  const { addEmployee, employees } = useContext(GlobalContext);

  const navigate = useNavigate();

  const onSubmit = e => {
    e.preventDefault();
    const newEmployee = {
        id: employees.length + 1,
        name,
        location,
        designation
    }
    addEmployee(newEmployee);
    localStorage.setItem('dataKey', JSON.stringify([...employees, newEmployee]));
    navigate("/");
    console.log("newEmployee", newEmployee)
}

  return (
    <div className="w-full emp-form container mx-auto">
      <form onSubmit={onSubmit}>
        <div className="w-full mb-3 ">
          <label
            className="form-label"
            htmlFor="name"
          >
            Name of employee
          </label>
          <input
            className="w-full form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter name"
          />
        </div>
        <div className="w-full mb-3">
          <label
            className="form-label"
            htmlFor="location"
          >
            Location
          </label>
          <input
            className="w-full form-input"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            placeholder="Enter location"
          />
        </div>
        <div className="w-full mb-3">
          <label
            className="form-label"
            htmlFor="designation"
          >
            Designation
          </label>
          <input
            className="w-full form-input"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            type="text"
            placeholder="Enter designation"
          />
        </div>
        <div className="flex items-center justify-between">
          <button className="w-full form-btn">
            Add Employee
          </button>
        </div>
        <div className="form-cancle-btn">
          <Link to="/">Cancel</Link>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
