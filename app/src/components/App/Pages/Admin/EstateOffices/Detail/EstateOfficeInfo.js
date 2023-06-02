import { useNavigate } from "react-router-dom";

import { formatName } from "../../../../../../core/modules/estateOffices/utils";
import Button from "../../../../../Design/Button/Button";

const EstateOfficeInfo = ({ estateOffice }) => {
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
        <img src={estateOffice.image} alt={estateOffice.title} />
        <h1>{formatName(estateOffice)}</h1>
        <p>{estateOffice.title}</p>
        <p>{estateOffice.email}</p>
        <p>{estateOffice.telephone}</p>
      </div>
    </div>
  );
};

export default EstateOfficeInfo;
