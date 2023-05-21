import React from 'react'
import FilterContainer from '../container/FilterContainer';

function FilterOptions() {
  return (
    <div className='filters'>
        <FilterContainer filter={'SHOW_ALL'}>
        All
        </FilterContainer>
        <FilterContainer filter={'SHOW_COMPLETED'}>
        Completed
        </FilterContainer>
        <FilterContainer filter={'SHOW_UNCOMPLETED'}>
        Uncompleted
        </FilterContainer>
    </div>
    )
}

export default FilterOptions;