import { useState } from "react";
import { projects } from "../App";
const SortDate = () => {
  const [sortBy, setSortBy] = useState(true);
  let sortedProjects;
  if (sortBy) {
    // eslint-disable-next-line no-unused-vars
    sortedProjects = [...projects].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
  } else {
    // eslint-disable-next-line no-unused-vars
    sortedProjects = [...projects].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  }
  return (
    <select className="py-3 px-2 rounded-xl w-full ">
      <option onClick={() => setSortBy((is) => !is)}>
        مرتب سازی(جدیدترین)
      </option>
      <option onClick={() => setSortBy((is) => !is)}>
        مرتب سازی(قدیمی ترین)
      </option>
    </select>
  );
};

export default SortDate;
