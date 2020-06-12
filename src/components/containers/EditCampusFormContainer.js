import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { fetchCampusThunk } from '../../thunks'
importt { fetchCampusThunk, editCampusThunk } from '../../thunks'

class EditCampusFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: " ",
      address: " ",
      description: " ",
      imageUrl: " ",  
    }
  }

  componentDidMount(){
    this.props.fetchCampus(this.props.match.params.id).then((payload) => )
  }

  render() {
    return (
      <div>
        <p>In EditCampusFormContainer </p>
      </div>
    )
  }
}

const mapState = {
  return {
    campus: state.campus,
  }
}

const mapDispatch = {
  return{
    fetchCampus: (id) => dispatch(fetchCampusThunk(id))
  }
}

EditCampusFormContainer.PropTypes = {
  fetchCampus: PropTypes.func.isRequired,
  editCampus: PropTypes.func.isRequired,
}

export default EditCampusFormContainer;