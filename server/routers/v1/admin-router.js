const express = require("express");
const router = express.Router();

const adminController = require("../../controllers/admin-controller")
const authMiddleware = require("../../middlewares/authMiddleware")

router.route("/users").get(authMiddleware, adminController.getAllUsers);

router.route("/contacts").get(authMiddleware, adminController.getAllContacts);

router.route("/services").get(authMiddleware, adminController.getAllServices);

module.exports = router;
