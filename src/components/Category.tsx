import { categories } from "../utils/categoryList";

export default function Category({ handleCategoryClick }: {handleCategoryClick: (query: string) => void }) {

  return (
    <ul className="flex justify-center gap-2 pt-4">
      {categories.map((category) => (
        <li
          key={category.name}
          onClick={() => handleCategoryClick(category.query)}
          className="bg-slate-500 px-4 py-2 rounded-3xl cursor-pointer"
        >
          {category.name}
        </li>
      ))}
    </ul>
  )
}
