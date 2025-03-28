const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors()); // Allows cross-origin requests
app.use(express.json()); // Parses JSON body

// Route to fetch users
app.get('/api/users', (req, res) => {
    fs.readFile('users.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ error: "Failed to read user data" });
        } else {
            res.json(JSON.parse(data));
        }
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
