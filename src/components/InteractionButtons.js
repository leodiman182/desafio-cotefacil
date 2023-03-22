import { Button, ButtonGroup } from "@mui/material";
import { useContext } from "react";
import AppContext from "../context/AppContext";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const InteractionButtons = () => {
  const { 
    counter, setCounter,
  } = useContext(AppContext);

  return (
    <ButtonGroup
      color="inherit"
      disableElevation
      variant="contained"
      aria-label="Disabled elevation buttons"
    >
      <Button
        sx={{
          width: 100,
          height: 50,
          backgroundColor: '#93c249',
          '&:hover, &.Mui-focusVisible': {
            backgroundColor: '#339652',
          },
        }}
        onClick={() => setCounter(counter - 1)}
      >
        <RemoveCircleOutlineIcon
          sx={{
            fill: '#fff'
          }}
        />
      </Button>
      <Button
        sx={{
          width: 100,
          height: 50,
          backgroundColor: '#93c249',
          '&:hover, &.Mui-focusVisible': {
            backgroundColor: '#339652',
          },
        }}
        onClick={() => setCounter(counter + 1)}
      >
        <AddCircleOutlineIcon
          sx={{
            fill: '#fff'
          }}
        />
      </Button>
    </ButtonGroup>
  )
}

export default InteractionButtons;