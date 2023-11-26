function login() {
    // Demo credentials (replace with your actual authentication logic)
    const demoEmail = 'admin';
    const demoPassword = 'admin';

    // Get user input
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check if credentials match
    if (email === demoEmail && password === demoPassword  || true) {
        // Show the dashboard and hide the login form
        document.getElementById('loginContainer').style.display = 'none';
        document.getElementById('dashboardContainer').style.display = 'block';
        document.getElementById('footer').style.display = 'block';
        return false; // Prevent form submission
    } else {
        // Display an error message (you can customize this part)
        alert('Invalid email or password. Please try again.');
        return false; // Prevent form submission
    }
}

function showRegister() {
    // Show the registration form and hide the login and dashboard
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('dashboardContainer').style.display = 'none';
    document.getElementById('registerContainer').style.display = 'block';
}

function register() {
    // Demo registration logic (replace with your actual registration logic)
    alert('Registration successful! Redirect to login page.');
    // Redirect to the login page
    showLogin();
    return false; // Prevent form submission
}

function showLogin() {
    // Show the login form and hide the dashboard and registration form
    document.getElementById('loginContainer').style.display = 'block';
    document.getElementById('dashboardContainer').style.display = 'none';
    document.getElementById('registerContainer').style.display = 'none';
}

function switchTab(tabNumber) {
    // For simplicity, let's just update the content based on the selected tab
    document.getElementById('tabContent').innerHTML = `Content for Tab ${tabNumber}`;
}

function logout() {
    // Show the login form and hide the dashboard and registration form
    showLogin();
}
