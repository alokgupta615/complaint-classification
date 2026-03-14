const express = require("express");
const path = require("path");
const app = express();

// app.use(express.static(path.join(__dirname, "../frontend")));

app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get((req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/about", (req, res) => {
  res.send("About Section");
});
app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

app.listen(3000, () => {
  console.log("App is listing on port 3000");
});
