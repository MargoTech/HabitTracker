import HabitItem from "./HabitItem";

const HabitList = ({ habits, toggleHabitComplete, handleDeleteHabit }) => {
  return (
    <ul className="mt-4 w-full max-w-lg">
      {habits.map((habit) => (
        <motion.div
          key={habit.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
        >
          <HabitItem
            key={habit.id}
            habit={habit}
            toggleHabitComplete={toggleHabitComplete}
            handleDeleteHabit={handleDeleteHabit}
          />
        </motion.div>
      ))}
    </ul>
  );
};

export default HabitList;
