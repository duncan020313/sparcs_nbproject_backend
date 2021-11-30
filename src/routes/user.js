const express = require("express");
const db = require("../db");
const router  = express.Router();

router.post("/", (req, res) => {
    const userName = req.body.userName;
    const userAddress = req.body.userAddress;
    const userAccount = req.body.userAccount;
    db.addUser(userName, userAddress, userAccount, (newItem) => {
        res.json(newItem);
    });
});

router.get("/", (req, res) => {
    db.getUserinfo((items) => {
        res.json(items);
    });
});

module.exports = router;

  