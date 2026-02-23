import React from "react";

const Sorting = (props) => {
  const { setSortBy } = props;
  const sortingOptions = [
    { label: "None", value: "NONE" },
    { label: "Priority (High → Low)", value: "PRIORITY" },
    { label: "Title (A-Z)", value: "TITLE" },
  ];
  return (
    <label>
      Order By :
      <select onChange={(e) => setSortBy(e.target.value)}>
        {sortingOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Sorting;
