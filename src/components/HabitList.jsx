import HabitItem from "./HabitItem";

const HabitList = ({ habits, toggleHabitComplete, handleDeleteHabit }) => {
  return (
    <ul className="mt-4 w-full max-w-lg">
      {habits.map((habit) => (
        <HabitItem
          key={habit.id}
          habit={habit}
          toggleHabitComplete={toggleHabitComplete}
          handleDeleteHabit={handleDeleteHabit}
        />
      ))}
    </ul>
  );
};

export default HabitList;
