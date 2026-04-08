// counter.js - Counter animation

// ========== COUNTER ANIMATION ==========
function startCounters() {
    const yearsEl = document.getElementById('stat-years');
    const clientsEl = document.getElementById('stat-clients');
    const projectsEl = document.getElementById('stat-projects');

    if (!yearsEl) return;

    const yearsTarget = 8;
    const clientsTarget = 500;
    const projectsTarget = 1000;

    let yearsCount = 0;
    let clientsCount = 0;
    let projectsCount = 0;

    const duration = 2000;
    const interval = 20;
    const yearsStep = yearsTarget / (duration / interval);
    const clientsStep = clientsTarget / (duration / interval);
    const projectsStep = projectsTarget / (duration / interval);

    const counterInterval = setInterval(() => {
        let allDone = true;

        if (yearsCount < yearsTarget) {
            yearsCount = Math.min(yearsCount + yearsStep, yearsTarget);
            yearsEl.textContent = Math.floor(yearsCount);
            allDone = false;
        }

        if (clientsCount < clientsTarget) {
            clientsCount = Math.min(clientsCount + clientsStep, clientsTarget);
            clientsEl.textContent = Math.floor(clientsCount) + '+';
            allDone = false;
        }

        if (projectsCount < projectsTarget) {
            projectsCount = Math.min(projectsCount + projectsStep, projectsTarget);
            projectsEl.textContent = Math.floor(projectsCount) + '+';
            allDone = false;
        }

        if (allDone) {
            clearInterval(counterInterval);
            yearsEl.textContent = yearsTarget + '+';
            clientsEl.textContent = clientsTarget + '+';
            projectsEl.textContent = projectsTarget + '+';
        }
    }, interval);
}
