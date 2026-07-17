const workoutList = document.getElementById("workoutList");

let workouts = JSON.parse(localStorage.getItem("workouts")) || [];

renderWorkouts();

function addWorkout() {
    const exercise = document.getElementById("exercise").value.trim();
    const sets = document.getElementById("sets").value;
    const reps = document.getElementById("reps").value;

    if (!exercise || !sets || !reps) {
        alert("Please fill out all fields.");
        return;
    }

    workouts.push({
        exercise,
        sets,
        reps
    });

    saveWorkouts();
    renderWorkouts();

    document.getElementById("exercise").value = "";
    document.getElementById("sets").value = "";
    document.getElementById("reps").value = "";
}

function renderWorkouts() {
    workoutList.innerHTML = "";

    workouts.forEach((workout, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <span>
                <strong>${workout.exercise}</strong>
                - ${workout.sets} sets × ${workout.reps} reps
            </span>
            <button class="delete" onclick="deleteWorkout(${index})">
                Delete
            </button>
        `;

        workoutList.appendChild(li);
    });
}

function deleteWorkout(index) {
    workouts.splice(index, 1);
    saveWorkouts();
    renderWorkouts();
}

function saveWorkouts() {
    localStorage.setItem("workouts", JSON.stringify(workouts));
}
