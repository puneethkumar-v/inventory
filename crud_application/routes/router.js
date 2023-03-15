const express = require("express");
const { getAllItems, createItem } = require("./items");
// import express from "express";
const router = express.Router();

router.route("/").get(getAllItems).post(createItem);

module.exports = router;
