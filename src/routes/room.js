const express = require("express");
const db = require("../db");
const router  = express.Router();

router.post("/", (req, res) => {
    const roomName = req.body.roomName;
    const maxPeople = req.body.roomMaxPeople;
    const userId = req.body.userId;
    const restaurant = req.body.restaurant;
    const masterUserId = req.body.userId;
    db.addRoom(roomName, maxPeople, restaurant, userId, masterUserId, (newItem) => {
        res.json(newItem);
    });
});

router.get("/", (req, res) => {
    db.getRoominfo((items) => {
        res.json(items);
    });
});

router.get("/:id", (req, res) => {
    db.getRoominfoWithUserID(req.params.id, (items) => {
        res.json(items);
    });
});


router.delete("/:id", (req, res) => {
    db.removeRoom(req.params.id, () => {
        res.status(200).send();
    });
});

router.put("/:userId/:roomId/:numOfpeople/:isremove", (req, res) => {
    if(req.params.isremove=='true'){
        db.removeUserinRoom(req.params.userId, req.params.roomId, req.params.numOfpeople, () => {
            res.status(200).send();
        });
    }
    else{
        db.addUserinRoom(req.params.userId, req.params.roomId, req.params.numOfpeople, () => {
            res.status(200).send();
        })
    }
});

router.put("/:userId/:roomId", (req, res) => {
    db.updateMasterUser(req.params.userId, req.params.roomId, () => {
        res.status(200).send();
    })
})

module.exports = router;

  