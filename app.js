import express from "express";
import router from "./routes/productRoutes.js";
const app = express();
app.use(express.json());
app.use(express.static("public"));
app.use("/api/products", router);

export default app;
