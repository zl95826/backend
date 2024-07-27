import express from "express";
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.json([
    { id: 1, name: "Monday" },
    { id: 2, name: "Tuesday" },
  ]);
});

app.listen(5000, () => {
  console.log("My server is working.");
});
