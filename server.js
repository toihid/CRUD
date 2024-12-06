import mongoose from "mongoose";
import app from "./app.js";
const port = 3030;
let mongoDbAtlus =
  "mongodb+srv://toihid:mongoDB@cluster0.lp0pl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
let mongoDbLocal = "mongodb://localhost:27017/productsBD";
async function start() {
  try {
    await mongoose
      .connect("mongoDbLocal")
      .then(() => console.log("connected to MOngoBD"))
      .catch((err) => {
        console.error("Faile to connect to MongoDB", err);
      });
    app.listen(port, () => {
      console.log(`local server is runnin in port ${port}`);
    });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}
start();
