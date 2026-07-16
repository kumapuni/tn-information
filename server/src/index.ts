import scheduleRouter from "./routes/schedule";
import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(
  "/api/schedule",
  scheduleRouter,
);

app.get("/", (_, res) => {

  res.send("TN Information Server");

});

app.listen(3001, () => {

  console.log(
    "Server running on port 3001"
  );

});