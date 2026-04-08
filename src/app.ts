import express from "express";
import cors from "cors";
import path from "path";
import characterRoutes from "./routes/characterRoutes";
import artifactRoutes from "./routes/artifactRoutes";


const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "../public")));
app.use("/characters", characterRoutes);
app.use("/artifacts", artifactRoutes);

export default app;
