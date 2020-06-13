import React from "react";
import "./styles/allStudentView.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllStudentView = (props) => {
  if (!props.allStudents.length) {
    return <div className="all-students">There are no students</div>;
  }

  return (
    <div className="all-students">
      {props.allStudents.map((student) => (
        <div key={student.id}>
          <Link to={`/students/${student.id}`}>
            <h1>{student.name}</h1>
          </Link>
          <img src={student.imageUrl} width="200px" alt={student.name} />
          <p>{student.students.length} students</p>
          <button onClick={() => props.handleDelete(student.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

AllStudentView.propTypes = {
  allStudents: PropTypes.array.isRequired,
};

export default AllStudentView;