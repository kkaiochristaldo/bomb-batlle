const express = require("express");
const router = express.Router();

    router.get("/", (req, res) => {
        return res.redirect("/login");
        
    });
    router.get("/login", (req, res) => {
        
        return res.render("./pages/login.html")
    });


module.exports = router;