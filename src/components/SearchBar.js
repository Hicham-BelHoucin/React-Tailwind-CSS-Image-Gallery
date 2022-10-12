import React from "react";

function SearchBar({ setTerm }) {
    let   term;
    const handleChange = (event) => {
      term = event.target.value;
    }
    const handleClick = (event) => {
      event.preventDefault()
      setTerm(term);
    }
    return (
      <form className="">
        <input placeholder="Search Image Term" className="border border-gray-400 rounded-lg py-2 px-2 mr-4" onChange={handleChange}/>
        <button className="bg-blue-400 text-white rounded-lg py-2 px-4 mt-7 hover:bg-blue-900" onClick={handleClick}>Search</button>
      </form>
    )
}

export default SearchBar;