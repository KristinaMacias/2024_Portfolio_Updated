import Hero from "./components/Hero";
import Recommendations from "./components/Recommendations";
import About from "./components/About";
import Stats from "./components/Stats";
import CommitCalendar from "./components/CommitCalendar";
import "./App.css";


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
