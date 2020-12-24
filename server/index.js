import express from "express";
import bodyparser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import postRoutes from "./routes/posts.js";

const app = express();
dotenv.config();

app.use(bodyparser.json({ limit: "30mb", extended: true }));
app.use(bodyparser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);
app.get("/", (req, res) => {
  res.status(200).send("Welcome to Memoirs API");
});

// https://www.mongodb.com/cloud/atlas
//const CONNECTION_URL = "mongodb+srv://<USERNAME>:<PASSWORD>@cluster0.d2e5a.mongodb.net/<DB_NAME>?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;
const CONNECTION_URL =
  process.env.CONNECTION_URL || "mongodb://db-service/memoir-app";

console.log("CONNECTION_URL", CONNECTION_URL);
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Sever running on port: ${PORT}`);
    })
  )
  .catch((error) => console.error(error.message));

mongoose.set("useFindAndModify", false);
