import { projects } from "../App"
const Category = () => {
  return (
    <select className="py-3 w-full rounded-xl text-center ">
        {projects.map((cat)=>{
            return(
                <option key={cat.category.id}>
                    {cat.category.title}
                </option>
            )
        })}
    </select>
  )
}

export default Category