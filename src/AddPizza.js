import { Button } from "@material-ui/core";

function AddPizza({ onAdd, disabled }) {
  return (
    <Button
      fullWidth
      onClick={onAdd}
      variant="contained"
      color="secondary"
      data-e2e-button="addPizza"
      disabled={disabled}
    >
      Add pizza
    </Button>
  );
}

export default AddPizza;
