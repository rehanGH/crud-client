import React from "react";

/**
 * 
 const campus = {
  id: "3434454",
  name: "Brooklyn College",
  address: "Brooklyn",
  imageUrl: "",
  description: "A college in Brooklyn",
};
 */

const CampusView = (props) => {
  let studentDisplay; 
  if(props.campus.students){
  studentDisplay = <p>{Response.campus.students} Students</p>;
  } else {
    studentDisplay = <p>There are np Students</p>;
  }

  return (
    <>
      <h1>{props.campus.name}</h1>
      <h3>{props.campus.address}</h3>
      <p>{props.campus.description}</p>
      <p>{props.campus.students} Students</p>
    </>
  );
};

export default CampusView;
