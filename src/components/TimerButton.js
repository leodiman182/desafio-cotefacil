/* eslint-disable react-hooks/exhaustive-deps */
import { IconButton } from "@mui/material";
import { useContext, useEffect } from "react";
import AppContext from "../context/AppContext";

import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

const TimerButton = () => {
  const { timerOn, setTimerOn, counter, setCounter } = useContext(AppContext);
  
  useEffect(() => {
    if (timerOn) {
      console.log('contando')
    } else {
      console.log('parado')
    }
  }, [timerOn]);

  function startTimer () {
    setCounter(counter + 1);
    setInterval(startTimer, 1000)
  }

  return (
    <IconButton
      aria-label="close"
      color={timerOn? "success" : "alert"}
      size="large"
      onClick={() => {
        setTimerOn(!timerOn);
        setInterval(startTimer, 1000);
      }}
    >
      <AccessAlarmIcon fontSize="large" />
    </IconButton>
  )
}

export default TimerButton;