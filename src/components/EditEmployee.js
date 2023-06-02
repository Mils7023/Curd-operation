import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
// import { useParams, useLocation, useRouter } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

const EditEmployee = () => {

  const { employees, editEmployee } = useContext(GlobalContext);
  const [selectedUser, setSeletedUser] = useState({
    id: null,
    name: "",
    designation: "",
    location: "",
  });

  const params = useParams();
  const currentUserId = params.id;
  const navigate =useNavigate()

  useEffect(() => {
    const employeeId = currentUserId;
    const selectedUser = employees.find(
      (emp) => emp.id === parseInt(employeeId)
    );
    setSeletedUser(selectedUser);
  }, []);

  const handleOnChange = (userKey, value) => {
    setSeletedUser({ ...selectedUser, [userKey]: value });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    editEmployee(selectedUser);
    navigate("/");
  };

  return (
    <div className="w-full emp-form container mx-auto">
      <form onSubmit={onSubmit}>
        <div className="w-full mb-3 ">
          <label className="form-label" htmlFor="name">
            Name of employee
          </label>
          <input
            className="w-full form-input"
            value={selectedUser.name}
            onChange={(e) => handleOnChange("name", e.target.value)}
            type="text"
            placeholder="Enter name"
          />
        </div>
        <div className="w-full mb-3">
          <label className="form-label" htmlFor="location">
            Location
          </label>
          <input
            className="w-full form-input"
            value={selectedUser.location}
            onChange={(e) => handleOnChange("location", e.target.value)}
            type="text"
            placeholder="Enter location"
          />
        </div>
        <div className="w-full mb-3">
          <label className="form-label" htmlFor="designation">
            Designation
          </label>
          <input
            className="w-full form-input"
            value={selectedUser.designation}
            onChange={(e) => handleOnChange("designation", e.target.value)}
            type="text"
            placeholder="Enter designation"
          />
        </div>
        <div className="flex items-center justify-between">
          <button className="w-full form-btn">Edit Employee</button>
        </div>
        <div className="form-cancle-btn">
          <Link to="/">Cancel</Link>
        </div>
      </form>
    </div>
  );
};

export default EditEmployee;
