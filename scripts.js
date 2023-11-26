function login() {
    // Perform login validation (you can add your logic here)
    // For simplicity, let's assume the login is successful
    document.getElementById('loginPage').classList.add('hidden');
    document.getElementById('dashboardPage').classList.remove('hidden');
    // Display default tab content on login
    switchTab(1);
}

function switchTab(tabNumber) {
    // Perform tab switching logic here
    // For simplicity, let's just update the content based on the selected tab
    const tabContent = document.getElementById('tabContent');
    switch (tabNumber) {
        case 1:
            tabContent.innerHTML = `<h2>System Details</h2>
                                    <p>This is the content of the System Details tab.</p>`;
            break;
        case 2:
            tabContent.innerHTML = `<h2>Control Options</h2>
                                    <p>This is the content of the Control Options tab.</p>`;
            break;
        case 3:
            tabContent.innerHTML = `<h2>Calibration Data</h2>
                                    <p>This is the content of the Calibration Data tab.</p>`;
            break;
        default:
            break;
    }
}
