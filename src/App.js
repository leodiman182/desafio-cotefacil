import { Stack } from "@mui/material";
import Header from "./components/Header";
import Timer from "./components/Timer";
import InteractionButtons from "./components/InteractionButtons";
import Footer from "./components/Footer";
import AlertComponent from "./components/AlertComponent";

function App() {
  return (
    <>
    <Header />
    <AlertComponent />
    <main className="main bg-slate-100 flex flex-col items-center justify-center">
      <Stack direction='column' spacing={2} alignItems='center'>
        <Timer />
        <InteractionButtons />
      </Stack>
    </main>
    <Footer />    
    </>
  );
}

export default App;
