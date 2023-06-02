import useFetch from "../../../../../../core/hooks/useFetch";
import Loading from "../../../../../Design/Loading/Loading";
import EditProfile from "../EditProfile";
import Header from "../../../../../Design/Public/Header/Header";

const ProfileDetail = ({ user }) => {
  // Assuming user object has id field
  const userId = user._id;

  const {
    isLoading,
    error,
    invalidate,
    // data: userJSON,
  } = useFetch(`/users/${userId}`);

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
      <EditProfile user={user} onUpdate={handleUpdate} role={user.role} />
    </>
  );
};

export default ProfileDetail;
