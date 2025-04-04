import { useState, useEffect } from "react";
import HabitForm from "./HabitForm";
import HabitList from "./HabitList";

const HabitTracker = () => {
  const [habits, setHabits] = useState(() => {
    const saved = localStorage.getItem("habits");
    try {
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [habitTitle, setHabitTitle] = useState("");

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  const handleAddHabit = () => {
    if (!habitTitle.trim()) return;
    const newHabit = {
      id: Date.now(),
      title: habitTitle,
      completed: false,
    };
    setHabits([...habits, newHabit]);
    setHabitTitle("");
  };

  const toggleHabitComplete = (id) => {
    setHabits(
      habits.map((habit) =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
      )
    );
  };

  const handleDeleteHabit = (id) => {
    setHabits(habits.filter((habit) => habit.id !== id));
  };

  const completedCount = habits.filter((habit) => habit.completed).length;

  return (
    <div
      className="flex flex-col items-center justify-center py-10 
      bg-gradient-to-r from-blue-400 via-blue-200 to-blue-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700
      transition-colors duration-500 min-h-screen w-full"
    >
      <h1 className="text-4xl font-semibold text-center text-gray-900 dark:text-gray-200 mb-6">
        Habit Tracker
      </h1>

      <HabitForm
        habitTitle={habitTitle}
        setHabitTitle={setHabitTitle}
        handleAddHabit={handleAddHabit}
      />

      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-md overflow-hidden mt-2">
        <div
          className="bg-blue-500 dark:bg-blue-700 h-4 transition-all"
          style={{ width: `${(completedCount / (habits.length || 1)) * 100}%` }}
        ></div>
      </div>

      <p className="mt-2 text-gray-800 dark:text-gray-300">
        Completed {completedCount} from {habits.length}
      </p>

      <HabitList
        habits={habits}
        toggleHabitComplete={toggleHabitComplete}
        handleDeleteHabit={handleDeleteHabit}
      />
    </div>
  );
};

export default HabitTracker;
