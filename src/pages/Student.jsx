import React, { useEffect } from "react";
import "./student.css";
import { useSelector, useDispatch } from "react-redux";
import { getData, removeStudent } from "../Redux/actions";

export const Student = () => {
  const dispatch = useDispatch();

  // get students
  useEffect(() => {
    getStudent();
  }, []);

  const getStudent = () => {
    dispatch(getData());
  };
  const { loading, error, data } = useSelector(
    (store) => store.students.students
  );

  const handleDelete = (id) => {
    console.log("deleting student in main page");
    dispatch(removeStudent(id));
    dispatch(getData());
  };

  return loading ? (
    "...Loading"
  ) : error ? (
    "Something wrong happened! Please try again"
  ) : (
    <>
      {data &&
        data.map((ele) => (
          <div className="card__student" key={ele._id}>
            <div className="first__div">
              <h3>{ele.username}</h3>
              <p>{ele.gender}</p>
            </div>

            <div className="sec__div">
              <p>{ele.city}</p>
              <p>{ele.contact}</p>
            </div>

            <div className="btn__div">
              <button
                onClick={() => {
                  handleDelete(ele._id);
                }}
                className="btn btn-danger"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
    </>
  );
};
