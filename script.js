// Open and close modal functionality

// Get modal elements
var userModal = document.getElementById("userLoginModal");
var adminModal = document.getElementById("adminLoginModal");

// Get button elements
var userLoginBtn = document.getElementById("userLoginBtn");
var adminLoginBtn = document.getElementById("adminLoginBtn");

// Get close elements
var closeUserModal = document.getElementById("closeUserModal");
var closeAdminModal = document.getElementById("closeAdminModal");

// Open User Login modal
userLoginBtn.onclick = function () {
    userModal.style.display = "flex";
}

// Open Admin Login modal
adminLoginBtn.onclick = function () {
    adminModal.style.display = "flex";
}

// Close User Login modal
closeUserModal.onclick = function () {
    userModal.style.display = "none";
}

// Close Admin Login modal
closeAdminModal.onclick = function () {
    adminModal.style.display = "none";
}

// Close modal if clicked outside
window.onclick = function (event) {
    if (event.target == userModal) {
        userModal.style.display = "none";
    }
    if (event.target == adminModal) {
        adminModal.style.display = "none";
    }
}

// Dummy login functions
function loginUser() {
    var userId = document.getElementById("userId").value;
    var password = document.getElementById("userPassword").value;

    // Basic validation
    if (userId === "" || password === "") {
        alert("Please enter both User ID and Password");
        return;
    }

    // Here, you can implement actual login logic (e.g., API call)
    if (userId === "user" && password === "password") {
        alert("User Login Successful");
        userModal.style.display = "none";
    } else {
        alert("Invalid User Credentials");
    }
}

function loginAdmin() {
    var uidaiNumber = document.getElementById("uidaiNumber").value;

    // Basic validation
    if (uidaiNumber === "") {
        alert("Please enter your UIDAI Number");
        return;
    }

    // Here, you can implement actual login logic (e.g., API call)
    if (uidaiNumber === "123456789012") {
        alert("Admin Login Successful");
        adminModal.style.display = "none";
    } else {
        alert("Invalid UIDAI Number");
    }
}
