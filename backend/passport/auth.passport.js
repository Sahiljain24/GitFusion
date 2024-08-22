const passport = require('passport');
const dotenv = require('dotenv');
const GitHubStrategy = require('passport-github2').Strategy;
const User = require('../models/user.model');

// Load environment variables from .env file
dotenv.config();

// Serialize user information into the session
passport.serializeUser(function (user, done) {
  done(null, user);
});

// Deserialize user information from the session
passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

// Configure Passport to use GitHub OAuth
passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "https://mern-github-app.onrender.com/api/auth/github/callback",
    },
    async function (accessToken, refreshToken, profile, done) {
      try {
        // Check if user already exists
        let user = await User.findOne({ username: profile.username });

        // If user does not exist, create a new user
        if (!user) {
          user = new User({
            name: profile.displayName,
            username: profile.username,
            profileUrl: profile.profileUrl,
            avatarUrl: profile.photos[0].value,
            likedProfiles: [],
            likedBy: [],
          });

          // Save the new user to the database
          await user.save();
        }

        // Pass the user object to the done callback
        done(null, user);
      } catch (error) {
        // Handle any errors during user lookup or creation
        done(error);
      }
    }
  )
);
