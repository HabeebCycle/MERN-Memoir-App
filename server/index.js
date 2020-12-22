import express from "express";
import bodyparser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";

const app = express();

app.use(bodyparser.json({ limit: "30mb", extended: true }));
app.use(bodyparser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);

// https://www.mongodb.com/cloud/atlas
const CONNECTION_URL =
  "mongodb+srv://memoir-app:habeeb123@cluster0.d2e5a.mongodb.net/memoir-app?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Sever running on port: ${PORT}`);
    })
  )
  .catch((error) => console.error(error.message));

mongoose.set("useFindAndModify", false);
