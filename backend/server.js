const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");
const path = require("path");

// Import your passport configuration, routes, and DB connection
const passportConfig = require('./passport/auth.passport.js');

const userRoutes = require("./routes/user.route.js");
const exploreRoutes = require("./routes/explore.route.js");
const authRoutes = require("./routes/auth.route.js");
const {dbconnect} = require("./config/dbconnect.js");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Resolve __dirname using CommonJS syntax
// const __dirname = path.resolve(); // No need to use fileURLToPath or import.meta.url

// Setup session management
app.use(session({
  secret: process.env.SESSION_SECRET || "keyboard cat",
  resave: false,
  saveUninitialized: false
}));

// Initialize Passport for authentication
app.use(passport.initialize());
app.use(passport.session());

// In development, use CORS if your frontend and backend are on different domains
if (process.env.NODE_ENV === 'development') {
  app.use(cors());
}

// Use API routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/explore", exploreRoutes);
console.log(__dirname)
// Serve static files from the frontend build
// app.use(express.static(path.join(__dirname, "/frontend")));

// app.get("*", (req, res) => {
// 	res.sendFile(path.join(__dirname, "frontend",  "index.html"));
// });
// Start the server and connect to MongoDB
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
  dbconnect();
});
