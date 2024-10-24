const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // Serve frontend files from public folder

// Dummy user and admin login data
const users = { user: 'password' };
const admins = { '123456789012': 'admin' };

// User login route
app.post('/api/user/login', (req, res) => {
    const { userId, password } = req.body;
    if (users[userId] && users[userId] === password) {
        return res.status(200).json({ message: 'User Login Successful' });
    }
    return res.status(401).json({ message: 'Invalid User Credentials' });
});

// Admin login route
app.post('/api/admin/login', (req, res) => {
    const { uidaiNumber } = req.body;
    if (admins[uidaiNumber]) {
        return res.status(200).json({ message: 'Admin Login Successful' });
    }
    return res.status(401).json({ message: 'Invalid UIDAI Number' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
