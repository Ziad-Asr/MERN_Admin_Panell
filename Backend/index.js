import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import mongoose from "mongoose";

import clientsRoutes from "./routes/clients";
import generalRoutes from "./routes/general";
import managementRoutes from "./routes/management";
import salesRoutes from "./routes/sales";

const app = express();

dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginOpenerPolicy({ policy: "cross-origin" }));
app.use(morgan("common"));

app.use("/clients", clientsRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);
