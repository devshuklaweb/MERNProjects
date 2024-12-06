const express = require("express");
const router = express.Router();

const adminController = require("../../controllers/admin-controller")
const authMiddleware = require("../../middlewares/authMiddleware")
const adminMiddleware = require("../../middlewares/adminMiddleware");

router.route("/users").get(authMiddleware, adminMiddleware, adminController.getAllUsers);

router.route("/contacts").get(authMiddleware, adminController.getAllContacts);

router.route("/services").get(authMiddleware, adminController.getAllServices);

module.exports = router;
