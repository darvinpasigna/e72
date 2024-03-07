const express = require('express');
const router = express.Router();

//controller
const postsController = require("../controller/posts.controller.js");

//routes
// router.get("/", postsController.getAll);
// router.post("/", postsController.create);
// router.get("/:id", postsController.getById);
// // router.put("/edit/:id", postsController.update);
// router.put("/:id", postsController.update);
// router.delete("/:id", postsController.delete);
router.get("/StudentCount", postsController.getDeptCodeAndStudentCount);
router.get("/StudentFullName", postsController.getDeptCodeandStudentFullName);
router.get("/ProfessorAndStudentCount", postsController.getProfessorAndStudentCount);
router.get("/ProfessorAndHiredate", postsController.getProfessorAndHiredate);
router.get("/StudentAcct", postsController.getDeptAndStudentAcct);
module.exports = router;