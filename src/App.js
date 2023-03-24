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
      <section className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-2 py-[50px]">
        <aside className="col-span-2 md:col-span-1">
          <Stack direction='column' spacing={2} alignItems='center'>
            <h2 className="font-bold text-primary text-center text-[20px] md:text-[24px] px-[20px] py-[20px] md:hidden">
              Tente somar, subtrair, ligar ou pausar o cronômetro.
            </h2>
            <Timer />
            <InteractionButtons />          
          </Stack>
        </aside>
        <article className="col-span-2 md:col-span-1 flex flex-col items-center justify-evenly">
          <h2 className="font-bold text-primary text-center md:text-[24px] px-[75px] hidden md:block">
            Tente somar, subtrair, ligar ou pausar o cronômetro.
          </h2>
          <div className="flex flex-row w-[250px] justify-evenly py-[20px] md:py-0">
            <TimerButton />
            <ResetAlert />
          </div>
        </article>
      </section>
    </main>
    <Footer />
    </>
  );
}

export default App;
