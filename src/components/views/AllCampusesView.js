import React from "react";
// import './styles/AllPlayersView.css';
import PropTypes from "prop-types";

const AllCampusesView = (props) => {
  return (
    <div className="all-campuses">
      {props.allCampuses.map((campus) => (
        <div key={campus.id}>
          <h1>{campus.name}</h1>
        </div>
      ))}
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;
