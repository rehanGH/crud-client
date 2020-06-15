import React from "react";

const StudentView = (props) => {
  let campusDisplay;
  if (props.student.students) {
    campusDisplay = (
      <div>
        <p>{props.student.students.length} Students</p>
        {props.student.students.map((student) => (
          <div key={student.id}>{student.firstName}</div>
        ))}
      </div>
    );
  } else {
    campusDisplay = <p>There are no campus </p>;
  }

  return (
    <>
      <img src={props.student.imageUrl} alt={props.student.name} />
      <h1>{props.student.name}</h1>
      <h3>{props.student.address}</h3>

      <p>{props.student.description}</p>
      {campusDisplay}
    </>
  );
};

export default StudentView;
