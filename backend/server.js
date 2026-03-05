import express from "express";
import fs from "fs";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/movies", (req, res) => {
  try {
    const data = fs.readFileSync("./movies.json", "utf-8");
    res.json(JSON.parse(data));
  } catch (error) {
    res.status(500).send("Error");
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});