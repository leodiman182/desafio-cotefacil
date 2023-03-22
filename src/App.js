import Header from "./components/Header";
import AlertComponent from "./components/AlertComponent";
import { Stack } from "@mui/material";
import TimerButton from "./components/TimerButton";
import Timer from "./components/Timer";
import InteractionButtons from "./components/InteractionButtons";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Header />
    <AlertComponent />
    <main className="main bg-slate-100 flex flex-col items-center justify-center">
      <Stack direction='column' spacing={2} alignItems='center'>
        <TimerButton />
        <Timer />
        <InteractionButtons />
      </Stack>
    </main>
    <Footer />    
    </>
  );
}

export default App;
