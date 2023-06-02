import { useNavigate } from "react-router-dom";

import { formatName } from "../../../../../../core/modules/users/utils";
import Button from "../../../../../Design/Button/Button";

const ProfileInfo = ({ user }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // navigate to the previous page in the browser history
  };

  return (
    <div>
      <Button onClick={handleBackClick}>&lt; Back</Button>
      <div className="flex flex-end">
        <Button color="primary" href="edit">
          Edit
        </Button>
      </div>
      <div>
        <img src={user.image} alt={user.title} />
        <h1>{formatName(user)}</h1>
        <p>{user.title}</p>
        <p>{user.username}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
