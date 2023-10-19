const express = require("express");
const router = express.Router();
const { v4 } = require("uuid");

router.get("/", (req, res) => {
  res.json(itemData);
});

router.post("/", (req, res) => {
  const item = req.body;
  itemData.push({ ...item, id: v4() });
  res.send(`Item "${item.name}" has been added successfully.`);
});

module.exports = router;
