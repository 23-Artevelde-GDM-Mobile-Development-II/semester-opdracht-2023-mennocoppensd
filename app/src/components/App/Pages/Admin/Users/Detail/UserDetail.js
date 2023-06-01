import { Route, Routes, useParams } from "react-router-dom";

import EditUser from "../EditUser";
import UserInfo from "./UserInfo";
import useFetch from "../../../../../../core/hooks/useFetch";
import Loading from "../../../../../Design/Loading/Loading";


const UserDetail = () => {
  const { id } = useParams();

  const {
    isLoading,
    error,
    invalidate,
    data: user,
  } = useFetch(`/users/${id}`);

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
    <Routes>
      <Route
        path="edit"
        element={<EditUser user={user} onUpdate={handleUpdate} />}
      />
      <Route index element={<UserInfo user={user} />} />
    </Routes>
  );
};

export default UserDetail;