import "./category-list.styles.scss";
import CategoryItem from "../category-item/category-item.component";

const CategoryList = ({ categories }) => (
  <div className="categories-container">
    {categories.map((category) => {
      return <CategoryItem key={category.id} category={category} />;
    })}
  </div>
);

export default CategoryList;
