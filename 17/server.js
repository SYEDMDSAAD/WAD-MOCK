// server.js
const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());

// Read user data from users.json
app.get("/users", (req, res) => {
    fs.readFile("users.json", "utf8", (err, data) => {
        if (err) {
            res.status(500).json({ message: "Error reading file" });
            return;
        }
        res.json(JSON.parse(data));
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
