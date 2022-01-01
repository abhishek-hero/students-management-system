import React, { useEffect } from "react";
import "./student.css";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../Redux/actions";

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

  return loading ? (
    "...Loading"
  ) : error ? (
    "Something wrong happened! Please try again"
  ) : (
    <>
      {data.map((ele) => (
        <div className="card__student" key={ele._id}>
          <div>
            <h3>{ele.username}</h3>
            <p>{ele.gender}</p>
          </div>

          <div>
            <p>{ele.city}</p>
            <p>{ele.contact}</p>
          </div>
        </div>
      ))}
    </>
  );
};
