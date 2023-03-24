import { Fade, IconButton, Tooltip } from "@mui/material";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { useContext } from "react";
import AppContext from "../context/AppContext";

const ResetAlert = () => {
  const { counter, setCounter, setWasTimerUsed } = useContext(AppContext);
  return (
    <Fade in={counter}>
      <Tooltip title="Reset" placement="bottom" arrow>
        <IconButton
              aria-label="close"
              color="secondary"
              // sx={{
              //   backgroundColor: '#339652',
              //   color: '#fff',
              //   '&:hover, &.Mui-focusVisible': {
              //     backgroundColor: '#93c249',
              //   },
              // }}
              size="large"
              onClick={() => {
                setWasTimerUsed(false)
                setCounter(0)
              }}
              >
              <RestartAltIcon sx={{ fontSize: "50px" }} />
        </IconButton>
      </Tooltip>
    </Fade>
  )
}

export default ResetAlert;