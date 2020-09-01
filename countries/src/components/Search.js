import React from 'react'

const Search = ({search, handleSearchChange}) => {
  console.log(search)
  return(
    <form>
      <div>
        find countries <input value={search} onChange={handleSearchChange} />
      </div>
    </form>
  )
}


export default Search
