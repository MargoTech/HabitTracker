import HabitTracker from "./components/HabitTracker";
import DarkModeToggle from "./components/DarkModeToggle";

function App() {
  return (
    <div className="relative bg-white dark:bg-gray-900 transition-colors">
      <DarkModeToggle />
      <HabitTracker />
    </div>
  );
}

export default App;
