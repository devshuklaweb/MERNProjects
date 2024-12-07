const express = require("express");
const router = express.Router();

const adminController = require("../../controllers/admin-controller")
const authMiddleware = require("../../middlewares/authMiddleware")
const adminMiddleware = require("../../middlewares/adminMiddleware");

router.route("/users").get(authMiddleware, adminMiddleware, adminController.getAllUsers);
router.route("/users/delete/:id").delete(authMiddleware, adminMiddleware, adminController.deleteUserById);
router.route("/users/:id").get(authMiddleware, adminMiddleware, adminController.getUserById);

router.route("/contacts").get(authMiddleware, adminController.getAllContacts);
router.route("/contacts/delete/:id").delete(authMiddleware, adminMiddleware, adminController.deleteContactById);

router.route("/services").get(authMiddleware, adminController.getAllServices);
router.route("/services/delete/:id").delete(authMiddleware, adminMiddleware, adminController.deleteServiceById);

module.exports = router;
