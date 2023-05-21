import React from 'react'
import PropTypes from 'prop-types'

function Filter({active, onFilterClick, children}) {

    return (
        <button onClick={(e)=>{
            e.preventDefault()
            onFilterClick();
        }}>
        {children}
        </button>
        )
}

Filter.propTypes = {
    active: PropTypes.bool.isRequired,
    onFilterClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
};

export default Filter;