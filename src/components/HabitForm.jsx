import { useState, useEffect } from "react";

useEffect(() => {
  const savedHabits = JSON.parse(localStorage.getItem("habits"));
  if (savedHabits) {
    setHabits(savedHabits);
  }
}, []);

useEffect(() => {
  localStorage.setItem("habits", JSON.stringify(habits));
}, [habits]);

const HabitTracker = () => {
  const [habits, setHabits] = useState([]);
  const [habitTitle, setHabitTitle] = useState("");

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
    <div>
      <input
        type="text"
        value={habitTitle}
        onChange={(event) => setHabitTitle(event.target.value)}
        placeholder="Add habit"
      />
      <div className="w-full bg-gray-200 rounded-md overflow-hidden mt-2">
        <div
          className="bg-blue-500 h-4 transition-all"
          style={{ width: `${(completedCount / (habits.length || 1)) * 100}%` }}
        ></div>
      </div>
      <p>
        Completed {completedCount} from {habits.length}
      </p>
      <button onClick={handleAddHabit}>Add Habit</button>

      <ul>
        {habits.map((habit) => (
          <li
            key={habit.id}
            style={{
              textDecoration: habit.completed ? "line-through" : "none",
            }}
          >
            {habit.title}
            <button onClick={() => handleDeleteHabit(habit.id)}>Delete</button>
            <button onClick={() => toggleHabitComplete(habit.id)}>
              {habit.completed ? "❌ Cancel" : "✅ Ready"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HabitTracker;
