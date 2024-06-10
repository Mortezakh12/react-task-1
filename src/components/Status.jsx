import { useState } from "react";

const Status = () => {
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
export default Status;
