import { Link } from "react-router-dom";
import useFetch from "../../../../../core/hooks/useFetch";
import { formatName } from "../../../../../core/modules/estateOffices/utils";
import Button from "../../../../Design/Button/Button";
import List from "../../../../Design/List/List";
import ListItem from "../../../../Design/List/ListItem";
import Loading from "../../../../Design/Loading/Loading";
import Header from "../../../../Design/Public/Header/Header";
import DeleteEstateOfficeButton from "./Delete/DeleteEstateOfficeButton";


const EstateOfficesOverview = () => {
  const {
    isLoading,
    error,
    invalidate,
    data: estateOffices,
  } = useFetch("/estate-offices");
 
  if (error) {
    return <p>{error}</p>;
  }

  if (isLoading) {
    return <Loading />;
  }

  const handleDeleteSuccess = () => {
    invalidate();
  };

  console.log(estateOffices);
  return (
    <>
    <Header />
    <Link to="/admin" >&lt; Back</Link>
      <h1>Estate Offices</h1>
      <div className="flex flex-end">
        <Button color="primary" href="add">
          Add
        </Button>
      </div>
      <List>
        {estateOffices.map((estateOffice) => (
          <ListItem
          href={`/estate-offices/${String(estateOffice._id)}`} // Convert estateOffice._id to a string
          key={String(estateOffice._id)} // Convert estateOffice._id to a string
          img={estateOffice.image}
          title={formatName(estateOffice)}
        >
          <DeleteEstateOfficeButton id={String(estateOffice._id)} onSuccess={handleDeleteSuccess} /> 
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default EstateOfficesOverview;