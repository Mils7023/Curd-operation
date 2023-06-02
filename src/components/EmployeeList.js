import React, { Fragment, useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";

export const Employeelist = () => {
  const { employees, removeEmployee, editEmployee } = useContext(GlobalContext);
  const [employeeList, setEmployeeList] = useState([]);
  const [filterText, setFilterText] = React.useState("");

  useEffect(() => {
    let data = localStorage.getItem("dataKey", JSON.stringify(...employees));
    data = JSON.parse(data);
    setEmployeeList(data);
  }, [employees]);

  const filteredItems = employees.filter(
    (item) =>
      (item.name &&
        item.name.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.location &&
        item.location.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.designation &&
        item.designation.toLowerCase().includes(filterText.toLowerCase()))
  );

  const columns = [
    {
      name: "Employee ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Employee Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Employee Location",
      selector: (row) => row.location,
      sortable: true,
    },
    {
      name: "Employee Designation",
      selector: (row) => row.designation,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="list-right">
          <Link to={`/edit/${row.id}`}>
            <button
              onClick={() => editEmployee(row.id)}
              className="edit-btn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-edit"
              >
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
            </button>
          </Link>
          <button
            onClick={() => removeEmployee(row.id)}
            className="delet-btn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-trash-2"
            >
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
          </button>
        </div>
      ),
    },
  ];

  return (
    <Fragment>
      {employees.length > 0 ? (
        <Fragment>
          {employees.map((employee) => (
            <div className="employee-list-main" key={employee.id}>
              <div className="employee-details">
                <p className="text-name">{employee.name}</p>
                <p className="text-sub">{employee.designation}</p>
                <span className="text-location">{employee.location}</span>
              </div>
              <div className="list-right">
                <Link to={`/edit/${employee.id}`}>
                  <button
                    onClick={() => editEmployee(employee.id)}
                    className="edit-btn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-edit"
                    >
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                  </button>
                </Link>
                <button
                  onClick={() => removeEmployee(employee.id)}
                  className="delet-btn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-trash-2"
                  >
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </Fragment>
      ) : (
        <p className="text-center bg-gray-100 text-gray-500 py-5">No data</p>
      )}

      {/* <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      /> */}
      <input
        type="text"
        onChange={(e) => setFilterText(e.target.value)}
        value={filterText}
      />
      <DataTable columns={columns} data={filteredItems} pagination />
    </Fragment>
  );
};
