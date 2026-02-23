import React from "react";

const Filter = (props) => {
  const { setFilter } = props;
  const filterOptions = [
    { label: "All", value: "ALL" },
    { label: "Completed", value: "COMPLETED" },
    { label: "Pending", value: "PENDING" },
    { label: "High Priority", value: "HIGH_PRIORITY" },
  ];
  return (
    <label>
      {" "}
      Filter :
      <select onChange={(e) => setFilter(e.target.value)}>
        {filterOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Filter;
