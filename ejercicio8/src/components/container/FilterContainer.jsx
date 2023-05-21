import { connect } from 'react-redux' 
import Filter from '../pure/Filter'
import { setVisibilityFilter } from '../../state/actions/actions'

const mapStateToProps = (state, ownProps) => {

 return {
    active: ownProps.filter === state.filter 
 }   

}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onFilterClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        } 
    }
}

const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter)

export default FilterContainer