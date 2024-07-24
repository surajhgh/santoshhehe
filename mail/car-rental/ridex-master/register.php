<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="register.css">
</head>
<body>
    <div class="container">
        <h2>Login with Email</h2>
        <form id="loginForm">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <button type="submit">Login</button>
        </form>
        <div id="successMessage" class="hidden">Logged in successfully! Redirecting...</div>
    </div>
    <script src="register.js"></script>
</body>
</html>
