const HabitItem = ({ habit, toggleHabitComplete, handleDeleteHabit }) => {
  return (
    <li
      className="flex justify-between items-center p-2 mb-2 bg-white shadow-md rounded-md"
      style={{
        textDecoration: habit.completed ? "line-through" : "none",
      }}
    >
      <span>{habit.title}</span>
      <div>
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
      </div>
    </li>
  );
};

export default HabitItem;
