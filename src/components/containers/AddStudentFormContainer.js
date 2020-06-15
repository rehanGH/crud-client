import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { AddStudentFormView } from "../views";
import { addStudentThunk } from "../../thunks";

class AddStudentFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName:"",
      email: "",
      imageUrl: "",
      gpa: "",
      isValidName: false,
      errors: {},
    };
  }

  handleChange = (e) => {
    if (e.target.firstName === "firstName") {
      this.setState({ firstName: e.target.value }, this.validateName);
    } else if(e.target.lastName === "lastName"){
      this.setState({ lastName: e.target.value }, this.validateName);
    }
    else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };

  validateName = () => {
    const { firstName } = this.state;
    const { lastName } = this.state;
    let errors = { ...this.state.errors };
    let isValidName = true;
    if (firstName.length < 2 || lastName.length <2) {
      isValidName = false;
      errors.name = "Invalid student name";
    }
    if (isValidName) {
      errors.name = "valid name";
    }
    this.setState({ isValidName, errors });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.isValidName) this.props.addStudent(this.state);
  };

  render() {
    return (
      <>
        {/* Can potentially be extracted into its own ErrorMessage component */}
        {this.state.isValidName ? "" : this.state.errors.name}
        <AddStudentFormView
          Student
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          imageUrl={this.state.imageUrl}
          gpa={this.state.gpa}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </>
    );
  }
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    addStudent: (student) => dispatch(addStudentThunk(student, ownProps)),
  };
};

AddStudentFormContainer.propTypes = {
  addSudent: PropTypes.func.isRequired,
};

export default connect(null, mapDispatch)(AddStudentFormContainer);
