const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(express.json());

const dbUrl = "mongodb://localhost:27017/messages";
mongoose
  .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

const Schema = mongoose.Schema;
const messageSchema = new Schema({
  message: String,
  date: { type: Date, default: Date.now },
});

app.use(cors({ origin: "http://localhost:5173" }));
const MessageSchema = mongoose.model("MessageSchema", messageSchema);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/message", (req, res) => {
  try {
    console.log(req.body);
    const newMessage = new MessageSchema({
      message: req.body?.message,
    });
    newMessage.save();
    res.json(200);
  } catch (error) {
    console.log(error);
    res.json(500, { error: error });
  }
});

app.get("/messages", (req, res) => {
  try {
    MessageSchema.find({}).then((messages) => {
      res.json(messages);
    });
  } catch (error) {
    console.log(error);
    res.json(500);
  }
});

app.delete("/message/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    const deleted = await MessageSchema.findOneAndDelete({
      _id: req.params.id,
    });
    res.json(200);
  } catch (error) {
    console.log(error);
    res.json(500);
  }
});

app.put("/message/:id", async (req, res) => {
  try {
    console.log(req.params.id, req.body);
    const updated = await MessageSchema.findByIdAndUpdate(req.params.id, {
      message: req.body.message,
    });
    res.json(200);
  } catch (error) {
    console.log(error);
    res.json(500);
  }
});

app.get("/message/:id", async (req, res) => {
  try {
    const found = await MessageSchema.findById(req.params.id);
    res.json(200, { message: found });
  } catch (error) {
    console.log(error);
    res.json(500);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
