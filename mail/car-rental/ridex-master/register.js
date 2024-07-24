document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;

    // Here you would typically send the data to the server and handle authentication
    // For this example, we'll simulate a successful login

    document.getElementById('successMessage').classList.remove('hidden');

    console.log(`Email: ${email}`);

    // Simulate a delay and then redirect to index.php
    setTimeout(() => {
        window.location.href = 'index.php';
    }, 2000);
});
