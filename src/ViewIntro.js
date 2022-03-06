import { Button } from "@material-ui/core";

function ViewIntro({ onOrder }) {
  return (
    <Button
      variant="contained"
      data-e2e-button="order"
      color="primary"
      onClick={onOrder}
    >
      Order your 🍕
    </Button>
  );
}

export default ViewIntro;
