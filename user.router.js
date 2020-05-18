const express = require("express");
const router = express.Router();

const ctrlUser = require("../controllers/user.controller");

router.post("/userRegister", ctrlUser.register);
router.patch("/userUpdate/:id", ctrlUser.updateUser);
router.get("/userProfile/:id", ctrlUser.userProfile);
router.delete("/userDelete/:id", ctrlUser.userDelete);
module.exports = router;
