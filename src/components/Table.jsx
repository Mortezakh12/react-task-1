import { TbTextPlus } from "react-icons/tb";
import { projects } from "../App";
const Table = ({sortedProjects}) => {
  return (
    <div>
      <table className="border-collapse border-spacing-0 w-full ">
        <thead>
          <tr className="">
            <th>#</th>
            <th>عنوان پروژه</th>
            <th>بودجه</th>
            <th>ددلاین</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => {
            return (
              <tr className="bg-white " key={project._id}>
                <td>{index + 1}</td>
                <td>{project.title}</td>
                <td>{project.budget}</td>
                <td >{project.deadline}</td>
                <td
                  className={
                    project.status === "CLOSED"
                      ? " w-1 h-1 p-0.5 rounded-full bg-rose-700  text-center text-white font-bold "
                      : " w-1 h-1 p-0.5  text-center text-white bg-emerald-600 font-bold rounded-full "
                  }
                >
                  {project.status === "CLOSED" ? "بسته " : "باز  "}
                </td>
                <td >
                  <TbTextPlus className="stroke-blue-600" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
