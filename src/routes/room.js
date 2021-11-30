const express = require("express");
const db = require("../db");
const router  = express.Router();

router.post("/", (req, res) => {
    const name = req.body.name;
    const maxPeople = req.body.maxPeople;
    db.addRoom(name, maxPeople, (newItem) => {
        res.json(newItem);
    });
});

router.get("/", (req, res) => {
    db.getRoominfo((items) => {
        res.json(items);
    });
});

module.exports = router;

  