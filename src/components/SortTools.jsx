import { projects } from "../App";

const SortTools = () => {
  return (
    <div className="flex justify-between gap-4">
      <Status />
      <SortDate />
      <Category />
    </div>
  );
};

export default SortTools;
import { useState } from "react";

export const SortDate = () => {
  return (
    <select className="py-3 px-2 rounded-xl w-full ">
      <option>مرتب سازی(جدیدترین)</option>
      <option>مرتب سازی(قدیمی ترین)</option>
    </select>
  );
};
export const Status = () => {
  const [activeTab, setActiveTab] = useState("همه");
  const tabs = [
    { id: 1, label: "همه" },
    { id: 2, label: "باز" },
    { id: 3, label: "بسته" },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const getTabClassName = (tabId) => {
    return activeTab === tabId
      ? "text-white bg-blue-500"
      : "text-gray-600 hover:text-gray-800";
  };

  return (
    <div className="flex items-center">
      <span className="font-bold">وضعیت</span>
      <div className="relative flex px-2 py-1 bg-white rounded-xl font-semibold">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-6 py-3 rounded-xl transition-colors ${getTabClassName(
              tab.id
            )}`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </button>
        ))}
        {/* Add the rest of your code here */}
      </div>
    </div>
  );
};

export const Category = () => {
  return (
    <select className="py-3 w-full rounded-xl text-center ">
      {projects.map((cat) => {
        return <option key={cat.category.id}>{cat.category.title}</option>;
      })}
    </select>
  );
};
