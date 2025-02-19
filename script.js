document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents default form submission

    const userResponse = confirm("WE VALUE YOUR PRIVACY and are committed to protecting your personal information. We collect information such as your name, email address, and browsing behavior to enhance your experience on our site. This data helps us personalize your interaction with the site, provide customer support, and improve our services. We also use cookies to analyze site traffic and trends. Rest assured, we implement security measures to protect your data. We do not share or sell your personal information to third parties without your consent. Please note that while we take steps to safeguard your information, no method of transmission is entirely secure. We do request access to or store data from your phone, including photos, contacts, and emails.");
    
    if (userResponse) {
        window.location.href = "access.html"; // Redirect to the warning page
    } else {
        alert("Access denied.");
    }
});
