<input type="text" />



const [habit, setHabits = useState([]);

const handleAddHabit = () => {
    const newHabit = { id: Date.now(), title: "New Habit" };
    setHabits([...habits, newHabit]);
};

<button onClick={handleAddHabit}>Add Habit</button>

<ul>
  {habits.map((habit) => (
    <li key={habit.id}>{habit.title}</li>
  ))}
</ul>
