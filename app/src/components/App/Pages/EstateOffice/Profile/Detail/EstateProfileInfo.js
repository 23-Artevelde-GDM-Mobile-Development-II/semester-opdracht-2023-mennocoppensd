import { Link } from "react-router-dom";


import { formatName } from "../../../../../../core/modules/users/utils";
import Button from "../../../../../Design/Button/Button";

const EstateProfileInfo = ({ user }) => {
    // const backLink = role === 'ADMIN' ? "/admin" : "/estate-office";
  return (
    <div>
      <Link to="/office">&lt; Back</Link>
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

export default EstateProfileInfo;