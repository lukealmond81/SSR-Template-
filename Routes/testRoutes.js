const express = require("express");
const TestRouter = express.Router();
const { TestCon } = require("../Controllers/testController");

TestRouter.get("/data", TestCon);

module.exports = TestRouter;
