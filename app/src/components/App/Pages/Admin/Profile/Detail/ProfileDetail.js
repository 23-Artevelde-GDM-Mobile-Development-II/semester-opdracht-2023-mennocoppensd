import { Route, Routes } from "react-router-dom";
import jwt_decode from "jwt-decode";

import useFetch from "../../../../../../core/hooks/useFetch";
import Loading from "../../../../../Design/Loading/Loading";
import EditProfile from "../EditProfile";
import ProfileInfo from "./ProfileInfo";


const ProfileDetail = () => {

    // Get the token from the user object in localStorage
    const userJson = localStorage.getItem('KEYHUNT_USER');
    let userId;
    if (userJson) {
      try {
        const user = JSON.parse(userJson);  // Parse the JSON
        const decodedToken = jwt_decode(user.token);  // Decode the token
        userId = decodedToken.id;  // Extract the user ID from the token
      } catch (e) {
        console.log(e.message);
        // handle error, maybe redirect to login page
      }
    }

  const {
    isLoading,
    error,
    invalidate,
    data: user,
  } = useFetch(`/users/${userId}`);

  console.log(user);

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
        element={<EditProfile user={user} onUpdate={handleUpdate} />}
        
      />
      
      <Route index element={<ProfileInfo user={user} />} />
    </Routes>
  );
};

export default ProfileDetail;
