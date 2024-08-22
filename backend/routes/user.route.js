const express = require("express");

const router = express.Router();
const {getUserProfileAndRepos,getLikes,likeProfile} = require("../Controllers/user.controller");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

router.get("/profile/:username", getUserProfileAndRepos);
router.get("/likes", ensureAuthenticated, getLikes);
router.post("/like/:username", ensureAuthenticated, likeProfile);


 module.exports = router;