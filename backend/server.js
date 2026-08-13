import path from 'path'
const express = require("express");
const cors = require('cors');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

const routes = require('./routes/authRoutes');
const reservationRoutes = require("./routes/reservationRoutes");

const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// const secretKey = "abcdef";

// app.use(express.json());

// app.use((req, res, next) => {
//     console.log("path " + req.path + " method " + req.method);
//     next();
// });

// Routes
app.use('/api', routes);
app.use("/api/reservations", reservationRoutes);
// DB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));
const PORT = process.env.PORT || 3000;

const __dirname = path.resolve();
if(process.env.NODE_ENV === "production") {
    const frontendpath = path.join(__dirname, "..","frontend","dist")

    app.use(express.static(frontendpath))
    app.use("*", (req, res)=> {
        res.sendFile(path.join(frontendpath, "index.html"))
    })
}
app.get("/", (req, res) => {
    res.send("hello world")
})

app.listen(PORT, "0.0.0.0", ()=> console.log("Server running successfully....")) 