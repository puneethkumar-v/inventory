// const book = require("../model/book");
const Inventory = require("../model/inventory");
const getAllItems = async (req, res) => {
  try {
    const item = await Inventory.find({});
    res.status(200).json({ item });
  } catch (err) {
    res.status(500).json({ mssg: err });
    console.log(err);
  }
};
const createItem = async (req, res) => {
  //   res.send("This is post all tasks");
  //   res.send("ehh");
  // res.send("helllo");
  try {
    const item = await Inventory.create(req.body);
    res.status(200).json({ item });
  } catch (err) {
    res.status(500).json({ mssg: err });
    console.log(err);
  }
};
module.exports = {
  getAllItems,
  createItem,
};
