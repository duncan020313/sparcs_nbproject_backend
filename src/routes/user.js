const express = require("express");
const db = require("../db");
const router  = express.Router();

router.post("/", (req, res) => {
    const userName = req.body.userName;
    const userAddress = req.body.userAddress;
    const userAccount = req.body.userAccount;
    const userId = req.body.userId;
    const userPassword=  req.body.userPassword;
    db.addUser(userId, userPassword, userName, userAddress, userAccount, (newItem) => {
        res.json(newItem);
    });
});

router.get("/", (req, res) => {
    db.getUserinfo((items) => {
        res.json(items);
    });
});

router.get(":id", (req, res) => {
    db.getUserinfoWithId(req.params.id, (items)=>{
        res.json(items)
    });
});

router.delete("/:id", (req, res) => {
    db.removeUser(req.params.id, () => {
        res.status(200).send();
    });
});

router.get("/:id/:password", (req, res) => {
    db.login(req.params.id, req.params.password, (item) => {
        res.json(item);
    });
});

module.exports = router;

  