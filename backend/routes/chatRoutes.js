const express = require("express");
const { accessChat, fetchChats, createGroupChats, renameGroup } = require("../controllers/chatControllers");
const chats = require("../data/data");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/").post(protect, accessChat);
router.route("/").get(protect,fetchChats);
router.route("/group").post(protect,createGroupChats);
router.route("/rename").put(protect,renameGroup);
// router.route("/remove").put(protect,removeFromGroup);
// router.route("/add").put(protect,addToGroup);

module.exports = router