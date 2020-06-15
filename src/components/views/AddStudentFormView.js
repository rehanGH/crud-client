import React from "react";
import PropTypes from "prop-types";

const AddStudentFormView = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>
          First Name:{" "}
          <input
            value={props.firstName}
            name="name"
            onChange={props.handleChange}
            required
          ></input>
        </div>
        <div>
          Last Name:{" "}
          <input
            value={props.lastName}
            name="name"
            onChange={props.handleChange}
            required
          ></input>
        </div>
        <div>
          Last Name:{" "}
          <input
            value={props.lastName}
            name="name"
            onChange={props.handleChange}
            required
          ></input>
        </div>
        <div>
          GPA:{" "}
          <input
            value={props.gpa}
            name="description"
            onChange={props.handleChange}
            required
          ></input>
        </div>
        <div>
          Image Url:{" "}
          <input
            value={props.imageUrl}
            name="imageUrl"
            onChange={props.handleChange}
            required
          ></input>
        </div>
        <button>Create Student</button>
      </form>
    </div>
  );
};

AddStudentFormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  gpa: PropTypes.string.isRequired,
};

export default AddStudentFormView;
