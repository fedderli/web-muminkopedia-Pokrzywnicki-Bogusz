import express from "express";
import cors from "cors";
import path from "path";
import characterRoutes from "./routes/characterRoutes";


const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "../public")));
app.use("/characters",characterRoutes);

export default app;