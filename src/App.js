import Header from "./components/Header/index";
import AlertComponent from "./components/AlertComponent";
import { Stack } from "@mui/material";
import TimerButton from "./components/TimerButton";
import Timer from "./components/Timer";
import InteractionButtons from "./components/InteractionButtons";
import Footer from "./components/Footer";
import ResetAlert from "./components/ResetAlert";

function App() {
  return (
    <>
    <Header />
    <AlertComponent />
    <main className="main bg-slate-100 flex flex-col items-center justify-center">
      <h2 className="font-bold text-primary text-center text-[20px] md:text-[24px] px-[20px] md:px-0 mb-[6px]">
        Tente somar, subtrair, ligar ou pausar o cronômetro.
      </h2>
      <Stack direction='column' spacing={1} alignItems='center'>
        <Stack direction='row' spacing={2}>
          <TimerButton />
          <ResetAlert />
        </Stack>
        <Timer />
        <InteractionButtons />
      </Stack>
    </main>
    <Footer />    
    </>
  );
}

export default App;
