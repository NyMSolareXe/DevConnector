import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import { connect } from 'react-redux'
import { deleteEducation } from '../../actions/profile'

const Education = (props) => {
  const { education, deleteEducation } = props
  const educations = education.map((element) => (
    <tr key={element._id}>
      <td>{element.school}</td>
      <td className="hide-sm">{element.degree}</td>
      <td>
        <Moment format="YYYY/MM/DD">{new Date(element.from)}</Moment> -{' '}
        {element.to === null ? ' Now' : <Moment format="YYYY/MM/DD">{new Date(element.to)}</Moment>}
      </td>
      <td>
        <button onClick={() => deleteEducation(element._id)} className="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  ))
  return (
    <Fragment>
      <h2 className="my-2">Education Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>School</th>
            <th className="hide-sm">Degree</th>
            <th className="hide-sm">Years</th>
            <th />
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
    </Fragment>
  )
}

Education.propTypes = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired,
}

export default connect(null, { deleteEducation })(Education)
