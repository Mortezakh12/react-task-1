import { useState } from "react";

const Status = () => {
  const btn = [
    {
      id: 1,
      label: "همه",
      active: false,
      classActive:
        "px-2 rounded  hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white active:bg-blue-600 active:text-white ",
      classDeActive: "px-2 rounded text-black",
    },
    {
      id: 2,
      label: "باز",
      active: false,
      classActive:
        "px-2 rounded bg-white hover:bg-blue-600 hover:text-black focus:bg-blue-600 focus:text-black active:bg-blue-600 active:text-black text-white",
      classDeActive: "px-2 rounded bg-white text-white",
    },
    {
      id: 3,
      label: "بسته",
      active: false,
      classActive:
        "px-2 rounded bg-white hover:bg-blue-600 hover:text-black focus:bg-blue-600 focus:text-black active:bg-blue-600 active:text-black text-white",
      classDeActive: "px-2 rounded bg-white text-white",
    },
  ];
  const [activeBtn, setActiveBtn] = useState(1);

  return (
    <div className="flex justify-evenly items-center ">
      <label>وضعیت</label>
      <div className="p-2 bg-white rounded">
        {btn.map((button) => {
          return (
            <button
              onClick={(id) => setActiveBtn(button.id)}
              className={
                activeBtn === button.id
                  ? button.classActive
                  : button.classDeActive
              }
              key={button.id}
            >
              {button.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Status;
