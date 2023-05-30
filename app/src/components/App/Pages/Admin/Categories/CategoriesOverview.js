import { Link } from "react-router-dom";
import useFetch from "../../../../../core/hooks/useFetch";
import { formatName } from "../../../../../core/modules/categories/utils";
import Button from "../../../../Design/Button/Button";
import List from "../../../../Design/List/List";
import ListItem from "../../../../Design/List/ListItem";
import Loading from "../../../../Design/Loading/Loading";
import Header from "../../../../Design/Public/Header/Header";
import DeleteCategoryButton from "./Delete/DeleteCategoryButton";


const CategoriesOverview = () => {
  const {
    isLoading,
    error,
    invalidate,
    data: categories,
  } = useFetch("/categories");
 
  if (error) {
    return <p>{error}</p>;
  }

  if (isLoading) {
    return <Loading />;
  }

  const handleDeleteSuccess = () => {
    invalidate();
  };

  console.log(categories);
  return (
    <>
    <Header />
    <Link to="/admin" >&lt; Back</Link>
      <h1>Categories</h1>
      <div className="flex flex-end">
        <Button color="primary" href="add">
          Add
        </Button>
      </div>
      <List>
        {categories.map((category) => (
          <ListItem
          href={`/categories/${String(category._id)}`} // Convert category._id to a string
          key={String(category._id)} // Convert category._id to a string
          img={category.image}
          title={formatName(category)} // Include the user's role in the title
        >
          <DeleteCategoryButton id={String(category._id)} onSuccess={handleDeleteSuccess} /> 
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default CategoriesOverview;