import React from "react";
import "./student.css";
import { useSelector } from "react-redux";

export const Student = () => {
  const { loading, error, data } = useSelector(
    (store) => store.students.students
  );

  console.log(data);
  return (
    <>
      {/* {student.map((ele) => (
        <div className="card">
          <div>
            <h3>{ele.username}</h3>
            <p>{ele.gender}</p>
          </div>

          <div>
            <p>{ele.city}</p>
            <p>{ele.contact}</p>
          </div>
        </div>
      ))} */}
      <div className="card__student"></div>
    </>
  );
};
