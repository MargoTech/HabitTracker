const HabitForm = ({ habitTitle, setHabitTitle, handleAddHabit }) => {
  return (
    <div className="flex flex-col items-center w-full max-w-md">
      <input
        type="text"
        value={habitTitle}
        onChange={(e) => setHabitTitle(e.target.value)}
        placeholder="Add habit"
        className="border border-blue-500 p-2 rounded-md bg-gray-100 text-lg w-full mb-2"
      />
      <button
        onClick={handleAddHabit}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all"
      >
        Add Habit
      </button>
    </div>
  );
};

export default HabitForm;
