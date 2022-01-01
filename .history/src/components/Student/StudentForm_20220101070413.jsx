import React from "react";
import { useState, useEffect } from "react";
import "./studentForm.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  addStudent,
  addStudentLoading,
  addStudentSuccess,
  getStudent,
} from "../../Redux/actions";

export const StudentForm = () => {
  const dispatch = useDispatch();

  const students = useSelector((store) => store.students);

  useEffect(() => {
    getStudent();
  }, []);

  const getStudent = async () => {
    const { data } = await axios.get("/smu-users");
    // dispatch(getStudent(data));
  };

  const [input, setInput] = useState({
    username: "",
    city: "",
    age: "",
    education: "",
    gender: "",
    contact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch(addStudentLoading());

    try {
      const { data } = await axios.post("/smu-users", {
        username: input.username,
        city: input.city,
        age: input.age,
        education: input.education,
        gender: input.gender,
        contact: input.contact,
      });

      dispatch(addStudentSuccess(data));
    } catch (err) {
      dispatch(addStudentLoading(err));
    }
    getStudent();
  };
  return (
    <div className="container form__div">
      <h3>Add New Student</h3>
      <form>
        <div className="mb-3 form__input">
          <label className="form-label">Name</label>
          <input
            onChange={handleChange}
            value={input.username}
            name="username"
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3 form__input">
          <label className="form-label">City</label>
          <input
            onChange={handleChange}
            value={input.city}
            name="city"
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3 form__input">
          <label className="form-label">Age</label>
          <input
            onChange={handleChange}
            value={input.age}
            name="age"
            type="number"
            className="form-control"
          />
        </div>

        <div className="mb-3 form__input">
          <label className="form-label">Education</label>
          <input
            onChange={handleChange}
            value={input.education}
            name="education"
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3 form__input">
          <label className="form-label">Gender</label>
          <input
            onChange={handleChange}
            value={input.gender}
            name="gender"
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3 form__input">
          <label className="form-label">Contact</label>
          <input
            onChange={handleChange}
            value={input.contact}
            name="contact"
            type="text"
            className="form-control"
          />
        </div>
        <button onClick={handleClick} type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
