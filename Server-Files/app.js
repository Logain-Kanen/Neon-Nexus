// Server Files
require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 9000;
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../Server Files')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});
// Connect to MongoDB then Start Server
async function startServer() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');

        app.listen(PORT, () => {
            console.log('Server running on port', PORT);
        })
    }
    catch (error) {
        console.error(error);
        console.log('Connection to Server failed!');
    }
}

startServer();
