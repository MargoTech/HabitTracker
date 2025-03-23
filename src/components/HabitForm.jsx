import { useState } from "react";

const HabitTracker = () => {
  const [habits, setHabits] = useState([]);
  const [habitTitle, setHabitTitle] = useState("");

  const handleAddHabit = () => {
    if (!habitTitle.trim()) return;
    const newHabit = { id: Date.now(), title: habitTitle };
    setHabits([...habits, newHabit]);
    setHabitTitle("");
  };

  const handleDeleteHabit = (id) => {
    setHabits(habits.filter((habit) => habit.id !== id));
  };

  return (
    <div>
      <input
        type="text"
        value={habitTitle}
        onChange={(event) => setHabitTitle(event.target.value)}
        placeholder="Add habit"
      />
      <button onClick={handleAddHabit}>Add Habit</button>

      <ul>
        {habits.map((habit) => (
          <li key={habit.id}>
            {habit.title}
            <button onClick={() => handleDeleteHabit(habit.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HabitTracker;
