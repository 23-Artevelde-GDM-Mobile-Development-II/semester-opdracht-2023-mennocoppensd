import { Route, Routes } from "react-router-dom";
import useFetch from "../../../../../../core/hooks/useFetch";
import Loading from "../../../../../Design/Loading/Loading";
import Header from "../../../../../Design/Public/Header/Header";
import EditEstateProfile from "../EditEstateProfile";

const EstateProfileDetail = ({ user }) => {
  // Assuming user object has id field
  const userId = user._id;

  const {
    isLoading,
    error,
    invalidate,
    // data: userJSON,
  } = useFetch(`/users/${userId}`);

  console.log(user); // log the error variable
  const handleUpdate = () => {
    invalidate();
  };

  if (error) {
    return <p>{error}</p>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
    <Header />
      <EditEstateProfile user={user} onUpdate={handleUpdate} />
      </>
  );
};

export default EstateProfileDetail;
