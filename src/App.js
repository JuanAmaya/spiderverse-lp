import Description from "./components/Sections/Description";
import End from "./components/Sections/End";
import Footer from "./components/Sections/Footer";
import Intro from "./components/Sections/Intro";
import Production from "./components/Sections/Production";
import Trailer from "./components/Sections/Trailer";
import Topbar from "./components/UI/Topbar";

function App() {
  return (
    <div className="relative">
      <header>
        <Topbar />
      </header>

      <main className="relative">
        <Intro />
        <Description />
        <Trailer />
        <Production />
        <End />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
