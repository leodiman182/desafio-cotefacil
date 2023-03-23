import { IconButton } from "@mui/material";
import { useContext, useEffect, useRef } from "react";
import AppContext from "../context/AppContext";

import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

const TimerButton = () => {
  const { timerOn, setTimerOn, setCounter } = useContext(AppContext);
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
    <>
      {
        timerOn ? (
          <IconButton
            aria-label="close"
            color="success"
            sx={{
              backgroundColor: '#339652',
              color: '#fff',
              '&:hover, &.Mui-focusVisible': {
                backgroundColor: '#93c249',
              },
            }}
            size="large"
            onClick={() => {
              setTimerOn(!timerOn)
              clearInterval(id.current)
            }}
            >
            <AccessAlarmIcon fontSize="large" />
          </IconButton>
        ) : (
          <IconButton
          aria-label="close"
          color="alert"
          size="large"
          onClick={() => {
              setTimerOn(!timerOn)
              handleTimer()
            }}
          >
            <AccessAlarmIcon fontSize="large" />
          </IconButton>
        )
      }    
    </>
  )
}

export default TimerButton;