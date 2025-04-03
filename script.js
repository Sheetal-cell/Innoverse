// Dark Mode Toggle
const toggleDarkMode = document.getElementById("toggleDarkMode");
toggleDarkMode.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Dyslexic Font Toggle
const toggleDyslexicFont = document.getElementById("toggleDyslexicFont");
toggleDyslexicFont.addEventListener("click", () => {
    document.body.classList.toggle("dyslexic-font");
});

// Task Manager
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    if (taskInput.value.trim() !== "") {
        const li = document.createElement("li");
        li.textContent = taskInput.value;
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

// AI Assistant (Dummy Function for now)
function askAI() {
    const aiQuery = document.getElementById("aiQuery").value;
    document.getElementById("aiResponse").textContent = `AI Response to: ${aiQuery}`;
}

// Mood Tracker
function trackMood() {
    const moodSelect = document.getElementById("moodSelect");
    const moodLogs = document.getElementById("moodLogs");
    const li = document.createElement("li");
    li.textContent = `Mood logged: ${moodSelect.value}`;
    moodLogs.appendChild(li);
}

// Job Matching (Dummy Function for now)
function matchJob() {
    const skillInput = document.getElementById("skillInput").value;
    const jobResults = document.getElementById("jobResults");
    jobResults.innerHTML = `<li>Suggested Job based on: ${skillInput}</li>`;
}
