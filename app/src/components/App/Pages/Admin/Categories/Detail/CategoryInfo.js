import { Link } from "react-router-dom";

import { formatName } from "../../../../../../core/modules/categories/utils";
import Button from "../../../../../Design/Button/Button";

const CategoryInfo = ({ category }) => {
  return (
    <div>
      <Link to="/admin">&lt; Back</Link>
      <div className="flex flex-end">
        <Button color="primary" href="edit">
          Edit
        </Button>
      </div>
      <div>
        <img src={category.image} alt={category.title} />
        <h1>{formatName(category)}</h1>
        <p>{category.title}</p>
        <p>{category.username}</p>
      </div>
    </div>
  );
};

export default CategoryInfo;
