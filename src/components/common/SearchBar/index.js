import React from 'react'
import "./style.css";
import SearchIcon from '@mui/icons-material/Search';
function SearchBar({value,onChange}) {
  return (
    <div className='searchBar'>
     <SearchIcon/>
     <input type="text" value={value} onChange={onChange}/>
    </div>
  )
}

export default SearchBar