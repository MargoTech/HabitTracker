import { useState, useEffect } from "react";

const HabitTracker = () => {
  const [habits, setHabits] = useState([]);
  const [habitTitle, setHabitTitle] = useState("");

  useEffect(() => {
    const savedHabits = JSON.parse(localStorage.getItem("habits"));
    if (savedHabits) {
      setHabits(savedHabits);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  const handleAddHabit = () => {
    if (!habitTitle.trim()) return;
    const newHabit = { id: Date.now(), title: habitTitle, completed: false };
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-semibold text-center text-blue-600 mb-6">
        Habit Tracker
      </h1>
      <input
        type="text"
        value={habitTitle}
        onChange={(event) => setHabitTitle(event.target.value)}
        placeholder="Add habit"
        className="border border-blue-500 p-2 rounded-md bg-gray-100 text-lg"
      />
      <div className="w-full bg-gray-200 rounded-md overflow-hidden mt-2">
        <div
          className="bg-blue-500 h-4 transition-all"
          style={{ width: `${(completedCount / (habits.length || 1)) * 100}%` }}
        ></div>
      </div>
      <p className="mt-2">
        Completed {completedCount} from {habits.length}
      </p>
      <button onClick={handleAddHabit}>Add Habit</button>

      <ul className="mt-4 w-full max-w-lg">
        {habits.map((habit) => (
          <li
            key={habit.id}
            className="flex justify-between items-center p-2 mb-2 bg-white shadow-md rounded-md"
            style={{
              textDecoration: habit.completed ? "line-through" : "none",
            }}
          >
            <span>{habit.title}</span>
            <button
              onClick={() => handleDeleteHabit(habit.id)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
            <button
              onClick={() => toggleHabitComplete(habit.id)}
              className="ml-2 text-green-500 hover:text-green-700"
            >
              {habit.completed ? "❌ Cancel" : "✅ Ready"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HabitTracker;
