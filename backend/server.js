import express from "express";
import fs from "fs";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// us3  get נתיב לקבל את הסרטים
app.get("/movies", (req, res) => {
  const data = fs.readFileSync("./movies.json", "utf-8");
  res.json(JSON.parse(data));
});

// k לפי סרט שאני אבחר
app.get("/seats/:id", (req, res) => {
  const movieId = req.params.id;
  const data = fs.readFileSync("./seats.json", "utf-8");
const allSeats=JSON.parse(data)
res.json(allSeats[movieId] || [])
});

app.listen(5000,()=>{
    console.log('server is runing on port 5000')
})