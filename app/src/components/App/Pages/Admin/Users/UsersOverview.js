import { Link } from "react-router-dom";
import useFetch from "../../../../../core/hooks/useFetch";
import { formatName } from "../../../../../core/modules/users/utils";
import Button from "../../../../Design/Button/Button";
import List from "../../../../Design/List/List";
import ListItem from "../../../../Design/List/ListItem";
import Loading from "../../../../Design/Loading/Loading";
import Header from "../../../../Design/Public/Header/Header";
import DeleteUserButton from "./Delete/DeleteUserButton";


const UsersOverview = () => {
  const {
    isLoading,
    error,
    invalidate,
    data: users,
  } = useFetch("/users");
 
  if (error) {
    return <p>{error}</p>;
  }

  if (isLoading) {
    return <Loading />;
  }

  const handleDeleteSuccess = () => {
    invalidate();
  };

  console.log(users);
  return (
    <>
    <Header />
    <Link to="/admin" >&lt; Back</Link>
      <h1>Users</h1>
      <div className="flex flex-end">
        <Button color="primary" href="add">
          Add
        </Button>
      </div>
      <List>
        {users.map((user) => (
          <ListItem
          href={`/users/${String(user._id)}`} // Convert user._id to a string
          key={String(user._id)} // Convert user._id to a string
          img={user.image}
          title={formatName(user)}
        >
          <DeleteUserButton id={String(user._id)} onSuccess={handleDeleteSuccess} /> 
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default UsersOverview;
