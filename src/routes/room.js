const express = require("express");
const db = require("../db");
const router  = express.Router();

router.post("/", (req, res) => {
    const roomName = req.body.roomName;
    const maxPeople = req.body.maxPeople;
    db.addRoom(roomName, maxPeople, (newItem) => {
        res.json(newItem);
    });
});

router.get("/", (req, res) => {
    db.getRoominfo((items) => {
        res.json(items);
    });
});

router.delete("/:id", (req, res) => {
    db.removeRoom(req.params.id, () => {
        res.status(200).send();
    });
});


module.exports = router;

  