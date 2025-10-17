const getWorkouts = async () => {
    const response = await fetch("../data/workouts.json");
    const data = await response.json();
    return data;
};

export { getWorkouts };
