const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();
const AuthService = require("../service/authService");
const authService = new AuthService();

const MemberController = require("../controller/memberController");
const memberController = new MemberController();

router.get("/index", upload.none(), memberController.index);
router.get(
  "/borrowed-books/count",
  [upload.none(), (req, res, next) => authService.checkToken(req, res, next)],
  memberController.borrowedBookCount
);
module.exports = router;
