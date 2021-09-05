import React from "react"
import PropTypes from "prop-types"

function Movie({id, year, title, summary, poster}) {
    return (
        <div>
            <h5>{title}</h5>
            <h6>{year}</h6>
            <img src={poster} alt={title} title={title}/>
            <p>{summary}</p>
        </div>
    )

}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
}
export default Movie