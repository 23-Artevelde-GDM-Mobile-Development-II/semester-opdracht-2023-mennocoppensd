import { Link } from "react-router-dom";


import { formatName } from "../../../../../../core/modules/estateOffices/utils";
import Button from "../../../../../Design/Button/Button";

const EstateOfficeInfo = ({ estateOffice }) => {
  return (
    <div>
      <Link to="/admin">&lt; Back</Link>
      <div className="flex flex-end">
        <Button color="primary" href="edit">
          Edit
        </Button>
      </div>
      <div>
        <img src={estateOffice.image} alt={estateOffice.title} />
        <h1>{formatName(estateOffice)}</h1>
        <p>{estateOffice.title}</p>
        <p>{estateOffice.username}</p>
      </div>
    </div>
  );
};

export default EstateOfficeInfo;