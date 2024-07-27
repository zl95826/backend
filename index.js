import express from "express";
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json([
    { id: 1, name: "Monday" },
    { id: 2, name: "Tuesday" },
  ]);
});

app.listen(5000, () => {
  console.log("My server is working.");
});
