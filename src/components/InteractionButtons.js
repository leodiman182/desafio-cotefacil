import { Button, ButtonGroup } from "@mui/material";
import { useContext } from "react";
import AppContext from "../context/AppContext";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const InteractionButtons = () => {
  const { 
    counter, setCounter,
    // timerOn, setTimerOn,
  } = useContext(AppContext);

  return (
    <ButtonGroup
      disableElevation
      variant="contained"
      aria-label="Disabled elevation buttons"
    >
      <Button onClick={() => setCounter(counter - 1)}>
        <RemoveCircleOutlineIcon />
      </Button>
      <Button onClick={() => setCounter(counter + 1)}>
        <AddCircleOutlineIcon />
      </Button>
    </ButtonGroup>
  )
}

export default InteractionButtons;