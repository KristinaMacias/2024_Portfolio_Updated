import Hero from "./components/Hero";
import Recommendations from "./components/Recommendations";
import About from "./components/About";
import Stats from "./components/Stats";
import "./App.css";
import CommitCalendar from "./components/CommitCalendar";


function App() {

  return (
    <div className="app-container">
      <Hero />
      <About />
      <Stats />
      <CommitCalendar />
      <Recommendations />
    </div>
  );
}

export default App;
