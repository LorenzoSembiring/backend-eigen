const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();

const AuthService = require("../service/authService");
const authService = new AuthService();
const BookService = require("../service/bookService");
const bookService = new BookService();

// const MemberController = require("../controller/memberController");
// const memberController = new MemberController();
const BookController = require("../controller/bookController");
const bookController = new BookController();

router.get("/index", upload.none(), bookController.index);
router.get("/available", upload.none(), bookController.available);
// router.get(
//   "/borrowed-books/count",
//   [upload.none(), (req, res, next) => authService.checkToken(req, res, next)],
//   memberController.borrowedBookCount
// );
router.post(
  "/borrow",
  [upload.none(), (req, res, next) => authService.checkToken(req, res, next)],
  bookController.borrow
);
router.get(
  "/return",
  [upload.none(), (req, res, next) => authService.checkToken(req, res, next)],
  bookController.return
);
router.get(
  "/in-rent",
  [upload.none(), (req, res, next) => authService.checkToken(req, res, next)],
  bookController.inRent
);
module.exports = router;
