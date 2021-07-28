import React from "react";

function Searchbar({handleSearch}) {
  return (
    <section
      className="searchbox-wrap"
      style={{ width: "50%", marginRight: "50px" }}
    >
      <input  onChange={handleSearch} type="text" placeholder="Search movie..." className="searchbox" />
    </section>
  );
}

export default Searchbar;
