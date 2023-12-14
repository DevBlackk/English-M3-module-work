const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Basic validation
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!username || !email || !password) {
        alert('Please fill in all required fields.');
        return;
    }

    // Simulate submitting the data to a server (replace with your actual logic)
    console.log(`Username: ${username}`);
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);

    alert('Registration successful!');
});
// Davidson