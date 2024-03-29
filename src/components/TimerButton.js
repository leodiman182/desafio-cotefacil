import { IconButton, Tooltip } from "@mui/material";
import { useContext, useEffect, useRef } from "react";
import AppContext from "../context/AppContext";
import { yellow } from "@mui/material/colors";

import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

const TimerButton = () => {
  const { timerOn, setTimerOn, setCounter, wasTimerUsed, setWasTimerUsed } = useContext(AppContext);
  const id = useRef()

  useEffect(() => {
    return () => clearInterval(id.current)
  }, []);

  function handleTimer () {
    id.current = setInterval(() => {
      setCounter(prev => prev + 1);
    }, 1000)
  }

  return (
    <Tooltip title="Start | Pause" placement="bottom" arrow>
      {
        timerOn ? (
          <IconButton
            aria-label="close"
            color="success"
            sx={{
              backgroundColor: '#93c249',
              color: '#fff',
              '&:hover, &.Mui-focusVisible': {
                backgroundColor: '#339652',
              },
            }}
            size="large"
            onClick={() => {
              setTimerOn(!timerOn)
              clearInterval(id.current)
            }}
            >
            <AccessAlarmIcon sx={{ fontSize: "50px" }} />
          </IconButton>
        ) : !timerOn && wasTimerUsed ? (
          <IconButton
            sx={{
              color: yellow[700],
            }}
            aria-label="close"
            color="alert"
            size="large"
            onClick={() => {
                setTimerOn(!timerOn);
                setWasTimerUsed(true)
                handleTimer()
              }}
            >
              <AccessAlarmIcon sx={{ fontSize: "50px" }} />
            </IconButton>

        ) : (
          <IconButton
          aria-label="close"
          color="alert"
          size="large"
          onClick={() => {
              setTimerOn(!timerOn);
              setWasTimerUsed(true)
              handleTimer()
            }}
          >
            <AccessAlarmIcon sx={{ fontSize: "50px" }} />
          </IconButton>
        )
      }
    </Tooltip>
  )
}

export default TimerButton;