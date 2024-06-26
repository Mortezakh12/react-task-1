/* eslint-disable no-undef */
import "./App.css";
import SortTools from "./components/SortTools";

import Table from "./components/Table";

// eslint-disable-next-line no-unused-vars, react-refresh/only-export-components
export const projects = [
  {
    _id: 1,
    title: "طراحی اپلیکیشن سفر آنلاین",
    description: "طراحی رابط کاربری و تجربه کاربری اپلیکیشن سفر آنلاین",
    status: "CLOSED",
    category: {
      id: 1,
      title: "طراحی UI/UX",
      englishTitle: "design-ui/ux",
    },
    budget: 10000,
    tags: ["Ui/UX", "Figma"],
    deadline: "2023-12-23T12:55:48.740Z",
    createdAt: "2023-10-23T18:18:55.636Z",
    updatedAt: "2024-06-02T13:37:48.468Z",
  },
  {
    _id: 2,
    title: "توسعه سایت فروشگاهی",
    description: "یک سایت فروشگاهی کامل با پنل ادمین",
    status: "OPEN",
    category: {
      id: 2,
      title: "برنامه نویسی وب",
      englishTitle: "web development",
    },
    budget: 50000,
    tags: ["React", "Nodejs", "online shop"],
    deadline: "2023-12-23T12:55:48.740Z",
    createdAt: "2023-10-23T18:18:55.636Z",
    updatedAt: "2024-06-02T13:37:48.468Z",
  },
  //  خودتون میتونید دیتاهای دیگه رو اضافه کنید.
];

function App() {
  // const [sortBy, setSortBy] = useState(true);
  // let sortedProjects;
  // if (sortBy) {
  //   // eslint-disable-next-line no-unused-vars
  //   sortedProjects = [...projects].sort(
  //     (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
  //   );
  // } else {
  //   // eslint-disable-next-line no-unused-vars
  //   sortedProjects = [...projects].sort(
  //     (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  //   );
  // }
  return (
    <div className="grid grid-cols-8 gap-4 items-center ">
      <div className="col-span-2 ">
        <div className=" font-bold text-2xl">لیست پروژه ها</div>
      </div>
      <div className="col-span-6  ">
        <SortTools />
      </div>
      <div className="col-span-8 ">
        <Table />
      </div>
    </div>
  );
}

export default App;
