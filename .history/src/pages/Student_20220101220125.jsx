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

  console.log(data);
  return (
    <>
      {data.map((ele) => (
        <div className="card__student">
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
      {/* <div className="card__student"></div> */}
    </>
  );
};
