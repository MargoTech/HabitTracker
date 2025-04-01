import HabitTracker from "./components/HabitTracker";
import DarkModeToggle from "./components/DarkModeToggle";

function App() {
  return (
    <div className="bg-white text-black dark:bg-gray-900 dark:text-white">
      <DarkModeToggle />
      <HabitTracker />
    </div>
  );
}

export default App;
