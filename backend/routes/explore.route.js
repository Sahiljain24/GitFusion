const express = require("express");
const router = express.Router();

 const {explorePopularRepos} = require("../Controllers/explore.controller")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")
router.get("/repos/:language", ensureAuthenticated, explorePopularRepos);


module.exports =router;