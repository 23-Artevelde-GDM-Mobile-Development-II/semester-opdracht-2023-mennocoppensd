import Button from "../../../../Design/Button/Button";
import useMutation from "../../../../../core/hooks/useMutation";

const DeletePropertyButton = ({ onSuccess, id }) => {
  const { isLoading, error, mutate } = useMutation();

  const handleClick = () => {
    mutate(`${process.env.REACT_APP_API_URL}/properties/${id}`, {
      method: "DELETE",
      onSuccess: () => {
        onSuccess();
      },
    });
  };

  console.log(error);

  return (
    <Button color="alert" onClick={handleClick} disabled={isLoading}>
      🗑
    </Button>
  );
};

export default DeletePropertyButton;
