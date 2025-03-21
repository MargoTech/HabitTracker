import { useState } from "react";

const HabitTracker = () => {
  const [habits, setHabits] = useState([]);
  const [habitTitle, setHabitTitle] = useState("");

  const handleAddHabit = () => {
    const newHabit = { id: Date.now(), title: habitTitle };
    setHabits([...habits, newHabit]);
    setHabitTitle("");
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
          <li key={habit.id}>{habit.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default HabitTracker;
